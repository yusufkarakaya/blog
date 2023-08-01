const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports = {
  authenticate: (req, res, next) => {
    jwt.verify(req.cookies.userToken, secret, (err, payload) => {
      if (err) {
        console.log('encontuer error jwt config');
        res.status(401).json('Unauthorized');
      } else {
        next();
      }
    });
  },
};
