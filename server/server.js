// require('./db')
const http = require('http');
const https = require('https');
const express = require('express');
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const auth = require('./auth')

process.env.TOKEN_SECRET = '6ffda691-5b98-4c3f-a955-9c88559f5e37'

function sendVue(res) {
  res.sendFile(path.resolve('public/index.html'))
}

const routes = require('./routes')
app.use(routes)

app.use(express.static('public'));
app.get(/.*/,(req,res)=> sendVue(res))

let localMode = process.argv.includes('-l')
if (!localMode) {

  // Certificate
  const credentials = {
    key: fs.readFileSync('/etc/letsencrypt/live/p-rp.mp/privkey.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/p-rp.mp/cert.pem', 'utf8'),
    ca: fs.readFileSync('/etc/letsencrypt/live/p-rp.mp/chain.pem', 'utf8'),
  }

  https.createServer(credentials, app).listen(443, ()=> {
    console.log(`App running on http://localhost`)
  })
  
  // Redirect from http port 80 to https
  http.createServer((req, res)=> {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url })
    res.end()
  }).listen(80)

} else {
  app.listen(80, ()=> console.log(`App running on http://localhost`))
}
