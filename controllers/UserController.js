const UserModel = require("../models/UserModel");
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require('mongodb');


const createUser = async (req, res) => {
    try {
      const { email, given_name, family_name, name, day_joined, groups, sub } =
        req.body;
        //Need to check sub before continuing post process for any pre-existing account with same sub
      const userInfo = await UserModel.create({
        email, given_name, family_name, name, day_joined, groups, sub
      });
      // console.log(messages);
      if (userInfo) {
        res.status(201).send(`${userInfo}`);
      }
    } catch (err) {
      if (err) throw err;
    }
  };

  const getUser = async (req, res) => {
    try {
      const userInfo = await UserModel.find({sub: req.params.id});
      // console.log(messages);
      if (userInfo) {
        res.status(200).json(userInfo);
      }
    } catch (err) {
      if (err) throw err;
    }
  };


  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const { email, given_name, family_name, name } =
        req.body;
  
      if (!ObjectId.isValid(id)) {
        res.status(400).json("Must use a valid user id to update a user.");
      }
      
      //This method makes it so that the entire object is not replaced, only the specified fields
      const updatedUser = await UserModel.findOneAndUpdate(
        { _id: id },
        {
            email, 
            given_name, 
            family_name, 
            name
        }
      );
  
      console.log(updatedUser);
  
      if (!updatedUser) {
        return res.status(400).json({ error: "User does not exist" });
      }
  
      res.status(204).json(updatedUser);
    } catch (err) {
      if (err) throw err;
    }
  };

  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!ObjectId.isValid(id)) {
        res.status(400).json("Must use a valid user id to delete a user.");
      }
  
      const user = await UserModel.findOneAndDelete({ _id: id });
  
      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }
  
      res.status(200).json(user);
    } catch (err) {
      if (err) throw err;
    }
  };

  module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
  };