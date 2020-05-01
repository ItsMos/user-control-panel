const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const sendMail = require('../mail')
const {db, ObjectID} = require('../db')

exports.registerNewUser = async (req, res) => {
  let username = req.body.username,
    email = req.body.email
  
  if (!(username && email)) {
    return res.json({
      errors: {
        username: "Please fill all fields"
      }
    })
  }

  if (username.length < 3) {
    return res.json({
      errors: {
        username: "Username must be at least 3 characters and 16 at most"
      }
    })
  }

  if (!/^[a-z0-9_-]{3,16}$/i.test(username)) {
    return res.json({
      errors: {
        username: "Username not valid, can only include - or _"
      }
    })
  }
  
  if (!/\w{2,}@\w{2,}\.\w{2,}/i.test(email)) {
    return res.json({
      errors: {
        email: "E-mail invalid"
      }
    })
  }

  if (!req.body.password || req.body.password.length < 8) {
    return res.json({
      errors: {
        password: "Password cant be less than 8 characters"
      }
    });
  }

  let result = await db.accounts.find({
    $or: [{username: username}, { email: email}]
  }).toArray()
  if (result.length > 0) {
    if (username == result[0].username) {
      return res.json({
        errors: {
          username: "Username is taken"
        }
      });
    }
    if (email == result[0].email) {
      return res.json({
        errors: {
          email: "Email is already registered"
        }
      });
    }
  } else {
    let account = {
      username,
      password: await bcrypt.hash(req.body.password, 10),
      email,
      verified: false,
      quizPassed: false,
      created: Date.now()
    }

    let {insertedId} = await db.accounts.insertOne(account)

    sendMail({
      to: account.email,
      subject: 'Pacific Roleplay E-mail Verification',
      text: `Welcome, in order to play and access your control panel, first you need to verify your email, just click the link below.\n${req.protocol}://${req.get('host')}/verify/${insertedId}`
    }).catch((err) => {
      console.log('Couldnt send verify mail', err.message)
    })

    res.status(201).end()
  }
};

exports.loginUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const user = await db.accounts.findOne({username});
    if (!user) {
      return res.status(401).json({errors: {
        username: "Wrong username" }});
    } else {
      if (!await bcrypt.compare(password, user.password)) {
        return res.status(401).json({errors: {
          password: "Wrong password"
        }})
      }
    }

    if (user.verified === false) {
      return res.json({errors: {
        msg: "You need to verify your email first, check your mailbox."
      }})
    }

    let payload = {username, created: user.created, quizPassed: user.quizPassed, id: user._id}
    const token = jwt.sign(payload, process.env.TOKEN_SECRET)
    res.status(201).json({ token })

  } catch (err) {
    console.error(err)
    res.status(400).json({ err: err })
  }
}

exports.verifyEmail = async (req, res)=> {
  let id = req.params.id
  if (id.length < 24) return res.end('invalid')
  let result = await db.accounts.findOne({_id: new ObjectID(id)})
  if (result && result.verified === false) {
    await db.accounts.updateOne({_id: new ObjectID(id)}, {
      $unset: {verified: ''}
    })
    res.redirect('/')
  } else {
    res.end('invalid')
  }
}

exports.getUserDetails = async (req, res) => {
  await res.json(req.userData)
};