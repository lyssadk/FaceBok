const PostModel = require("../models/PostModel");
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require('mongodb');

const getPosts = async (req, res) => {
    try {
      const postInfo = await PostModel.find();
      if (postInfo) {
        res.status(200).json(postInfo);
      }
    } catch (err) {
      if (err) throw err;
    }
  }

const getPostsByGroupId = async (req, res) => {
    try {
      const postInfo = await PostModel.find({ group_id: req.params.groupId});
      if (postInfo) {
        res.status(200).json(postInfo);
      }
    } catch (err) {
      if (err) throw err;
    }
  }

const createPost = async (req, res) => {
    try {
      const { group_id, content, likes, comments } = req.body;
      const postInfo = await PostModel.create({
        group_id, content, likes, comments
      });
      if (postInfo) {
        res.status(201).send(`${postInfo}`);
      }
    } catch (err) {
      if (err) throw err;
    }
  };

const updatePost = async (req, res) => {
    try {
      const postId = req.params.postId;
      if (!postId) {
        return res.status(400).json("Post ID is missing in request parameters.");
      }

      if (!ObjectId.isValid(postId)) {
        return res.status(400).json("Must use a valid post id to update a post.");
      }

      const { group_id, content, likes, comments } = req.body;
      
      const updatedPost = await PostModel.findOneAndUpdate(
        { _id: postId },
        { group_id, content, likes, comments },
        { new: true } // returns the updated document instead of the original document
      );
  
      if (!updatedPost) {
        return res.status(404).json("Post not found");
      }
  
      res.status(200).json(updatedPost);
    } catch (err) {
      if (err) throw err;
    }
  }

const deletePost = async (req, res) => {
    try {
      const postId = req.params.postId;
      if (!postId) {
        return res.status(400).json("Post ID is missing in request parameters.");
      }

      if (!ObjectId.isValid(postId)) {
        return res.status(400).json("Must use a valid post id to delete a post.");
      }

      const deletedPost = await PostModel.deleteOne({ _id: postId });
  
      if (!deletedPost) {
        res.status(404).json("Post not found");
      }
  
      res.status(204).json("Post deleted successfully");
    } catch (err) {
      if (err) throw err;
    }
  }

module.exports = { getPosts, getPostsByGroupId, createPost, updatePost, deletePost };