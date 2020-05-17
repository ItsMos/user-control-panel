const sendMail = require('../mail')
const db = require('../db')

let auth = require('./auth')
let router = require('express').Router()

router.use('/admin', auth)
router.use('/admin', (req,res, next) => {
  let id = req.userData.id
  let role = req.userData.role
  if (!['admin', 'tester'].some(r=> r == role))
  return res.sendStatus(401)
  
  res.data = {}
  next()
})

router.get('/admin', async (req,res) => {
  let json = {}
  for (let query in req.query) {
    
    if (query == 'stats') {
      let users = await db.accounts.countDocuments()
      let apps = await db.applications.countDocuments({status: null})
      let acceptedApps = await db.applications.countDocuments({status: 'accepted'})
      let deniedApps = await db.applications.countDocuments({status: 'denied'})

      json.stats = {users, apps, acceptedApps, deniedApps}
    }

    if (query == 'char') {
      let char
      try {
        char = await db.characters.findOne({_id: req.query.char}, {look: 0})
        
      } catch (error) {
        
      }
      json.char = char
    }

    if (query == 'chars') {
      let regex = new RegExp(req.query.chars, 'i')
      let arr = await db.characters.find({name: regex}, 'name cash bank gender ownerId age')

      json.chars = arr
    }

    if (query == 'accounts') {
      let regex = new RegExp(req.query[query], 'i')
      let arr = await db.accounts.find({username: regex}, 'username created email')

      json.accounts = arr
    }

    if (query == 'apps') {
      // Pending, Accepted, Denied
      let filter = req.query.apps.toLowerCase()
      if (!['pending', 'accepted', 'denied'].includes(filter))
        continue

      let skip = parseInt(req.query.skip) | 0
      
      if (filter == 'pending') filter = null

      let arr = await db.applications.find({status: filter}, 'lastChange reviewedBy')
        .sort('lastChange').limit(10).skip(skip).lean()
      
      for (let i =0; i < arr.length; i++) {
        let acc = await db.accounts.findOne({_id: arr[i]._id}, 'username')
        if (acc)
          arr[i].username = acc.username

        if (arr[i].reviewedBy) {
          let {username} = await db.accounts.findOne({_id: arr[i].reviewedBy}, 'username')
          if (username)
            arr[i].reviewedBy = username
        }
      }
      json.apps = arr
    }

    if (query == 'app') {
      let questions = require('../data/quiz2.json')
      let _id = req.query.app
      let app = await db.applications.findOne({_id})
      
      if (!app.status) {
        let acc = await db.accounts.findOne({_id}, 'username')
        app.username = acc.username
        
        app.status = 'reviewing'
        await app.save()
        setTimeout(async () => {
          let app = await db.applications.findOne({_id}, 'status')
          if (app.status == 'reviewing') {
            await db.applications.updateOne({_id}, {$unset: {status: 1}})
          }
        }, 6 * 60 * 1000)

        app = app.toJSON()
        app.questions = app.questions.map(i => questions[i])
  
        json.app = app
      }

    }
  }
  
  res.json(json)
})

router.post('/admin', async (req, res)=> {
  let body = req.body

  if (body.reviewApp) {
    let _id = body.reviewApp
    let app = await db.applications.findOne({_id}, 'status')
    if (!app || app.status != 'reviewing') return res.sendStatus(404)

    let acc = await db.accounts.findOne({_id}, 'email quizPassed lastQuizAttempt quizSubmitted')
    if (body.accept) {
      acc.quizPassed = undefined
      acc.lastQuizAttempt = undefined
      acc.quizSubmitted = undefined
      await acc.save()
      app.status = 'accepted'
      app.reviewedBy = req.userData.id
      await app.save()

      sendMail({
        to: acc.email,
        subject: 'Pacific Roleplay Application Accepted',
        text: `Your application has been accepted, you can now play 🎉\nReviewer comments: ${body.comment|| 'None'}\n\nPacific Roleplay Team ${req.protocol}://${req.get('host')}/`
      }).catch(e => {})

    } else {
      app.status = 'denied'
      app.reviewedBy = req.userData.id
      await app.save()

      sendMail({
        to: acc.email,
        subject: 'Pacific Roleplay Application Rejected',
        text: `We're sorry to tell you that your application has been rejected ☹, you can try again tho after refreshing your memory about server rules and roleplay basics.\nReviewer comments: ${body.comment|| 'None'}\n\nPacific Roleplay Team ${req.protocol}://${req.get('host')}/`
      }).catch(e => {})
    }

    await db.accounts.updateOne({_id: req.userData.id}, {$inc: {'adminStats.appsHandled': 1}})

    res.json({})
  }
})

setTimeout(async () => {
  await db.applications.updateMany({status: 'reviewing'}, {$unset: {status: 1}})
}, 4000)

module.exports = router