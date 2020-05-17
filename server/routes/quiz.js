let auth = require('./auth')
let router = require('express').Router()
const db = require('../db')

const numberOfQuestions = 5
const quiz = require('../data/quiz')
const quiz2 = require('../data/quiz2')

async function getQuizPropsForAccount(_id) {
  return await db.accounts.findOne({_id}, 'quizPassed quizSubmitted lastQuizAttempt')
}

router.get('/quizState', auth, async (req, res)=> {
  let {quizPassed, quizSubmitted, lastQuizAttempt} = await getQuizPropsForAccount(req.userData.id)
  res.json({
    quizSubmitted: !!quizSubmitted,
    quizPassed: quizPassed == null? true: false,
    lastQuizAttempt
  })
})

router.get('/quiz', auth, async (req, res)=> {
  let {quizPassed, quizSubmitted, lastQuizAttempt} = await getQuizPropsForAccount(req.userData.id)

  if (quizPassed !== false)
    return res.sendStatus(403)
  if (quizSubmitted)
    return res.sendStatus(403)
  
  // 30 minutes between attempts
  if (lastQuizAttempt && Date.now() - lastQuizAttempt < 1.8e+6)
    return res.sendStatus(403)

  let randomized = {}
  while (Object.keys(randomized).length < numberOfQuestions) {
    let r = Math.floor(Math.random() * quiz.length)
    let a = []
    while (a.length < 4) {
      let r2 = Math.floor(Math.random() * 4)
      let answerObj = {index: r2, ans: quiz[r].a[r2]}
      if (!a.some(ao => ao.index == answerObj.index))
        a.push(answerObj)
    }

    randomized[r] = {
      q: quiz[r].q,
      a
    }
  }
  res.json(randomized)

  await db.accounts.updateOne({_id: req.userData.id}, {lastQuizAttempt: Date.now()})
})

router.post('/quiz', auth, async (req, res)=> {
  let {quizPassed, quizSubmitted} = await getQuizPropsForAccount(req.userData.id)
  
  if (quizPassed !== false) return res.sendStatus(403)
  if (quizSubmitted) return res.sendStatus(403)

  let answers = req.body.answers
  let answersLen = Object.keys(answers).length
  if (answers && answersLen == numberOfQuestions) {
    let errors = 0
    Object.keys(answers).forEach(q => {
      if (quiz[q].correct !== answers[q])
        errors++
    })

    // fail if 20% or more answers wrong
    // errors > (numberOfQuestions * 20 / 100)
    if (errors > 0) {
      // fail
      res.json({
        pass: false,
        score: (answersLen-errors)+'/'+numberOfQuestions
      })

    } else {
      // pass
      res.json({
        pass: true,
        score: (answersLen-errors)+'/'+numberOfQuestions
      })
    }

  } else {
    res.sendStatus(406)
  }
})

router.get('/quiz2', auth, async (req, res)=> {
  let {quizPassed, quizSubmitted, lastQuizAttempt} = await getQuizPropsForAccount(req.userData.id)

  if (!lastQuizAttempt) return res.sendStatus(403)
  if (quizSubmitted) return res.sendStatus(403)
  if (quizPassed !== false) return res.sendStatus(403)

  res.json(quiz2)
})

router.post('/quiz2', auth, async (req, res)=> {
  let {quizPassed, quizSubmitted, lastQuizAttempt} = await getQuizPropsForAccount(req.userData.id)

  if (!lastQuizAttempt) return res.sendStatus(403)
  if (quizSubmitted) return res.sendStatus(403)
  if (quizPassed !== false) return res.sendStatus(403)

  let answers = req.body.answers

  if (!answers || Object.keys(answers).length < quiz2.length)
    return res.sendStatus(403)

  let arr = []
  for (let q in answers) arr.push(answers[q])

  if (!quizSubmitted) {
    let app = await new db.applications({
      _id: req.userData.id,
      questions: Object.keys(answers).map(n => Number(n)),
      answers: arr
    })
    app.save()

    await db.accounts.updateOne({_id: req.userData.id}, {
      quizSubmitted: true
    })

  } else {
    await db.applications.updateOne({
      _id: req.userData.id
    }, {
      questions: Object.keys(answers).map(n => Number(n)),
      answers: arr
    })
  }

  res.json({})
})

module.exports = router