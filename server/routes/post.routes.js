const PostController = require('../controllers/post.controller');

module.exports = (app) => {
  app.post('/api/createpost', PostController.createPost);
  app.get('/api/getposts', PostController.getPosts);
  app.get('/api/getpost/:id', PostController.getPost);
  app.put('/api/updatepost/:id', PostController.updatePost);
  app.delete('/api/deletepost/:id', PostController.deletePost);
};
