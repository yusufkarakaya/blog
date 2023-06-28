const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;
const bcrypt = require('bcrypt');

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.create(req.body);

      const userToken = jwt.sign(
        {
          id: user._id,
        },
        secret
      );

      res
        .cookie('userToken', userToken, {
          httpOnly: true,
          secure: true, // Set 'secure' to true if using HTTPS
          sameSite: 'strict', // Adjust sameSite value based on your requirements
        })
        .json({
          msg: 'success!',
          user: { id: user._id },
        });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  login: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      const correctPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!correctPassword) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      const userToken = jwt.sign(
        {
          id: user._id,
        },
        secret
      );

      res
        .cookie('userToken', userToken, {
          httpOnly: true,
          secure: true, // Set 'secure' to true if using HTTPS
          sameSite: 'strict', // Adjust sameSite value based on your requirements
        })
        .json({
          msg: 'success!',
          user: { id: user._id },
        });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  logout: (req, res) => {
    res.clearCookie('userToken', {
      httpOnly: true,
      secure: true, // Set 'secure' to true if using HTTPS
      sameSite: 'strict', // Adjust sameSite value based on your requirements
    });
    res.sendStatus(200);
  },

  getProfile: (req, res) => {
    jwt.verify(req.cookies.userToken, secret, (err, payload) => {
      if (err) {
        res.status(401).json({ verified: false });
      } else {
        res.json({ verified: true, payload: payload });
      }
    });
  },
};
