const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
const bcrypt = require('bcrypt');

module.exports = {
  register: async (req, res) => {
    try {
      const potentialUser = await User.findOne({ email: req.body.email });
      if (potentialUser) {
        res.status(400).json({ message: 'User already exists' });
      } else {
        const newUser = await User.create(req.body);

        const userToken = jwt.sign(
          { _id: newUser._id, email: newUser.email },
          secret
        );

        res
          .status(201)
          .cookie('userToken', userToken, { httpOnly: true })
          .json({ newUser });
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (user) {
        const passwordMatch = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (passwordMatch) {
          const userToken = jwt.sign(
            { _id: user._id, email: user.email },
            secret
          );
          res.cookie('userToken', userToken, { httpOnly: true }).json({ user });
        } else {
          res.status(400).json({ message: 'Invalid login attempt' });
        }
      } else {
        res.status(400).json({ message: 'Email or Password is wrong!' });
      }
    } catch (err) {
      res.status(400).json(err);
    }
  },

  logout: (req, res) => {
    res.clearCookie('userToken');
    res.sendStatus(200);
  },

  getProfile: (req, res) => {
    const token = req.cookies.userToken;
    jwt.verify(token, secret, {}, (err, info) => {
      if (err) throw err;
      res.json(info);
    });
  },
};
