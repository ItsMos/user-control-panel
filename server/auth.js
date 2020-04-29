const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    if (!token) return res.sendStatus(401)
    req.userData = jwt.verify(token, process.env.TOKEN_SECRET)
    next()
  } catch (err) {
    res.status(401).redirect('/')
  }
};