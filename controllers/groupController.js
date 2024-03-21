const groupModel = require('../models/groupModel');
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require('mongodb');

const createGroup = async (req, res) => {
    try {
        const { name, description, members, number_members } = req.body;
        const groupInfo = await groupModel.create({
        name, description, members, number_members
        });
        // console.log(messages);
        if (groupInfo) {
        res.status(201).send(`${groupInfo}`);
        }
    } catch (err) {
        if (err) throw err;
    }
};

const getGroupById = async (req, res) => {
    try {
        const groupInfo = await groupModel.find({name: req.params.id});
        // console.log(messages);
        if (groupInfo) {
            res.status(200).json(groupInfo);
        }
    } catch (err) {
        if (err) throw err;
    }
}

const getGroups = async (req, res) => {
    try{
        const groups = await groupModel.find();
        if(groups){
            res.status(200).json(groups);
        }

    }
    catch(err){
        if(err) throw err;
    }
}

const updateGroup = async (req, res) => {
    try {
        const groupInfo = await groupModel.findOneAndUpdate({name: req.params.id}, req.body)
        // console.log(messages);
        if (groupInfo) {
            res.status(200).json(groupInfo);
        }
    }
    catch (err) {
        if (err) throw err;
    }
}

const deleteGroup = async (req, res) => {
    try {
        const groupInfo = await groupModel.findOneAndDelete({name: req.params.id})
        // console.log(messages);
        if (groupInfo) {
            res.status(200).json(groupInfo);
        }
    }
    catch (err) {
        if (err) throw err;
    }
}

module.exports = { getGroups, getGroupById, createGroup, updateGroup, deleteGroup };