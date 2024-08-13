const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoute = require("./Routes/userRoute");

app.use(express.json());

mongoose.connect(process.env.URI)
    .then(() => {
        console.log("Connected Successfuly")
    })
    .catch((err) => {
        console.log("Error", err);
    });


app.listen(process.env.PORT || 5000, (err) => {
    if (err) console.log(err);
    console.log("Successfuly running on port:", process.env.PORT);
});

app.use("/", userRoute);