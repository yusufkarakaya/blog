const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
const bcrypt = require('bcrypt');

module.exports = {
  register: (req, res) => {
    User.create(req.body)
      .then((user) => {
        const userToken = jwt.sign(
          {
            id: user._id,
          },
          process.env.SECRET_KEY
        );

        res
          .cookie('userToken', userToken, {
            httpOnly: true,
          })
          .json({ msg: 'success!', user: user });
      })
      .catch((err) => res.json(err));
  },
  login: async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      // email not found in users collection
      return res.sendStatus(400);
    }

    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!correctPassword) {
      // password wasn't a match!
      return res.sendStatus(400);
    }

    // if we made it this far, the password was correct
    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY
    );

    // note that the response object allows chained calls to cookie and json
    res
      .cookie('userToken', userToken, {
        httpOnly: true,
      })
      .json({ id: user._id, email: user.email });
  },

  logout: (req, res) => {
    res.clearCookie('userToken');
    res.sendStatus(200);
  },

  getProfile: (req, res) => {
    const user = User.findOne({ email: req.body.email });
    jwt.verify(req.cookies.userToken, secret, (err, payload) => {
      if (err) {
        res.status(401).json({ verified: false });
      } else {
        res.json({ verified: true, payload: payload });
      }
    });
  },
};
