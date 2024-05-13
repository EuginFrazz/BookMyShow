const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "Eugin");
    req.body.userId = decodedToken.userId;
    next();
  } catch (err) {
    res.status(401).send({
      success: false,
      message: "Invalid token"
    });
  }
};