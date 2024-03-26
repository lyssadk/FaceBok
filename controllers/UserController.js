const UserModel = require("../models/UserModel");
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require('mongodb');


const createUserAndLogin = async (req, res) => {
    try {
      const { email, given_name, family_name, name, day_joined, groups, sub } =
        req.body;
        //Need to check sub before continuing post process for any pre-existing account with same sub

      const existingUserCheck = await UserModel.find({sub: sub});

      console.log(existingUserCheck);

      if (existingUserCheck.length > 0){
        return res.status(200).send("User already exists and you are 'logged in'");
      }

      const userInfo = await UserModel.create({
        email, given_name, family_name, name, day_joined, groups, sub
      });
      // console.log(messages);
      if (userInfo) {
        return res.status(201).send(`${userInfo}`);
      }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
  };

  const getUser = async (req, res) => {
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Must use valid mongo id" });
          }
      const userInfo = await UserModel.find({_id: req.params.id});
      // console.log(messages);
      if (userInfo) {
        return res.status(200).json(userInfo);
      }
      return res.status(404).json({error: "User not found"});
    } catch (err) {
        return res.status(500).json({ error: err });
    }
  };


  const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Must use valid mongo id" });
      }
      const { email, given_name, family_name, name } =
        req.body;
      
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
  
      return res.status(204).json(updatedUser);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
  };

  const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Must use valid mongo id" });
      }
  
      const user = await UserModel.findOneAndDelete({ _id: id });
  
      if (!user) {
        return res.status(400).json({ error: "User does not exist" });
      }
  
      return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
  };

  module.exports = {
    getUser,
    createUserAndLogin,
    updateUser,
    deleteUser
  };