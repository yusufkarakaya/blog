const Post = require('../models/post.model');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');
const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_KEY;

module.exports = {
  createPost: async (req, res) => {
    try {
      // Handle file upload using the uploadMiddleware
      uploadMiddleware.single('file')(req, res, async (err) => {
        if (err instanceof multer.MulterError) {
          // Handle multer error
          return res.status(400).json({ message: 'Error uploading file' });
        } else if (err) {
          // Handle other errors
          return res.status(400).json({ message: 'Something went wrong' });
        } else {
          const { originalname, path } = req.file;
          const parts = originalname.split('.');
          const extension = parts[parts.length - 1];
          const newPath = `${path}.${extension}`;
          fs.renameSync(path, newPath);

          const token = req.cookies.userToken;
          jwt.verify(token, secret, {}, async (err, info) => {
            if (err) throw err;
            const { title, summary, content } = req.body;

            try {
              const postDoc = await Post.create({
                title,
                summary,
                content,
                cover: newPath,
                author: info.id,
              });
              res.json(postDoc);
            } catch (err) {
              // Handle MongoDB validation error
              res.status(400).json(err);
            }
          });
        }
      });
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong', error: err });
    }
  },

  getPosts: async (req, res) => {
    try {
      const posts = await Post.find()
        .populate('author', 'username')
        .sort({ createdAt: -1 });
      res.json(posts);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id).populate(
        'author',
        'email username'
      );
      res.json(post);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  },

  updatePost: async (req, res) => {
    try {
      uploadMiddleware.single('file')(req, res, async (err) => {
        let newPath = null;
        if (err instanceof multer.MulterError) {
          // Handle multer error
          return res.status(400).json({ message: 'Error uploading file' });
        } else if (err) {
          // Handle other errors
          return res.status(400).json({ message: 'Something went wrong' });
        } else {
          if (req.file) {
            const { originalname, path } = req.file;
            const parts = originalname.split('.');
            const extension = parts[parts.length - 1];
            newPath = `${path}.${extension}`;
            fs.renameSync(path, newPath);
          }
          jwt.verify(req.cookies.userToken, secret, {}, async (err, info) => {
            if (err) throw err;

            const { id, title, summary, content } = req.body;
            const post = await Post.findById(id);

            // Check if the user is the author of the post
            if (post.author.toString() !== info.id.toString()) {
              return res.status(403).json({ message: 'Unauthorized' });
            }

            try {
              const updatedPost = {
                title,
                summary,
                content,
                cover: newPath ? newPath : req.body.cover,
              };

              // Use the `runValidators` option to enable validation during update
              const options = { new: true, runValidators: true };
              const updatedDoc = await Post.findByIdAndUpdate(
                id,
                updatedPost,
                options
              );

              res.json(updatedDoc);
            } catch (err) {
              // Handle MongoDB validation error
              res.status(400).json(err);
            }
          });
        }
      });
    } catch (err) {
      res.status(400).json({ message: 'Something went wrong', error: err });
    }
  },

  deletePost: async (req, res) => {
    try {
      // Check if the user is the author of the post
      await Post.findByIdAndDelete(req.params.id);
      res.json({ message: 'Post deleted successfully' });
    } catch (err) {
      res.status(400).json(' Error: ' + err);
    }
  },
};
