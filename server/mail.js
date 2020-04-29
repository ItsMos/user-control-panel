const nodemailer = require('nodemailer')

let user = 'noreply@p-rp.mp'
let transport = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 587,
  auth: {
    user,
    pass: 'Def12345.'
  }
})

module.exports = async function (options) {
  options.from = user
  return await transport.sendMail(options)
}