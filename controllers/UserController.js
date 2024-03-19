const UserModel = require("../models/UserModel");
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require('mongodb');


const createUser = async (req, res) => {
    try {
      const { email, given_name, family_name, name, day_joined, groups, sub } =
        req.body;
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


  module.exports = {
    getUser,
    createUser,
  };