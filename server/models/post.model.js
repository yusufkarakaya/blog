const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true,
      trim: true,
      minlength: [20, 'Title cannot be less than 20 characters'],
      maxlength: [150, 'Title cannot be more than 100 characters'],
    },
    summary: {
      type: String,
      required: [true, 'Summary is required'],
      minlength: [30, 'Summary cannot be less than 30 characters'],
      maxlength: [500, 'Summary cannot be more than 500 characters'],
    },
    content: {
      type: String,
      minlength: [100, 'Content cannot be less than 100 characters'],
      required: [true, 'Content is required'],
    },
    cover: {
      type: String,
      required: [true, 'Cover is required'],
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', PostSchema);
