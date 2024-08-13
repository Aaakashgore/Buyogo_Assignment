const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("../Models/userModel");

const router = express.Router();

//  Send data to backend
router.post("/", async(req, res) => {
    const { email, name, password } = req.body;
    const User = require("../Models/userModel");
    try {
        const userAdded = await User.create({
            email: email,
            name: name,
            password: password,
        });
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.send(400).json({ error: error.message });
    }
})

//  Get Multiple User
router.get("/", async(req, res) => {
    try {
        const showAll = await User.find();
        res.status(201).json(showAll);
    } catch (error) {
        console.log(error);
        res.send(400).json({ error: error.message });
    }
})

//  Get Single User
router.get("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const SingleUser = await User.findById({ _id: id });
        res.status(201).json(SingleUser);
    } catch (error) {
        console.log(error);
        res.send(400).json({ error: error.message });
    }
})

//   Delete data from backend
router.delete("/:id", async(req, res) => {
    const { id } = req.params;
    try {
        const SingleUser = await User.findByIdAndDelete({ _id: id });
        res.status(201).json(SingleUser);
    } catch (error) {
        console.log(error);
        res.send(400).json({ error: error.message });
    }
})

//   Update data from backend
router.patch("/:id", async(req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const UpdateUser = await User.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(201).json(UpdateUser);
    } catch (error) {
        console.log(error);
        res.send(400).json({ error: error.message });
    }
})

module.exports = router;