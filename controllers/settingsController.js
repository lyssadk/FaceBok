const settingsModel = require("../models/settingsModel")
const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require('mongodb');

const createSettings = async (req, res) => {
    try {
        const { user_id, light_theme, color_theme } = req.body;
        const settingsInfo = await settingsModel.create({
        user_id, light_theme, color_theme
        });
        // console.log(messages);
        if (settingsInfo) {
        res.status(201).send(`${settingsInfo}`);
        }
    } catch (err) {
        if (err) throw err;
    }
}

const getSettings = async (req, res) => {
    try {
        const settingsInfo = await settingsModel.find({user_id: req.params.id});
        // console.log(messages);
        if (settingsInfo) {
            res.status(200).json(settingsInfo);
        }
    } catch (err) {
        if (err) throw err;
    }
}

const updateSettings = async (req, res) => {
    try {
        const settingsInfo = await settingsModel.findOneAndUpdate({user_id: req.params.id}, req.body)
        // console.log(messages);
        if (settingsInfo) {
            res.status(200).json(settingsInfo);
        }
    }
    catch (err) {
        if (err) throw err;
    }
}

const deleteSettings = async (req, res) => {
    try {
        const settingsInfo = await settingsModel.findOneAndDelete({user_id: req.params.id})
        // console.log(messages);
        if (settingsInfo) {
            res.status(200).json(settingsInfo);
        }
    }
    catch (err) {
        if (err) throw err;
    }
}

module.exports = { getSettings, createSettings, updateSettings, deleteSettings };