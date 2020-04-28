const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 8080;
const auth = require('./auth')

function sendVue(res) {
  res.sendFile(path.resolve('public/index.html'))
}

process.env.TOKEN_SECRET = '6ffda691-5b98-4c3f-a955-9c88559f5e37'

const routes = require('./routes')
app.use(routes)

app.use(express.static('public'));
app.get(/.*/,(req,res)=> sendVue(res))


app.listen(port, () =>
  console.log(`App running on http://localhost:${port}`)
)
