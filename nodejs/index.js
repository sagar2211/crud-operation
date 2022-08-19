require("dotenv/config");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// routes
const users = require("./routes/user");

// app use
const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', users);
app.use("/image", express.static("public/upload_images"));

// database connection
mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection create successfully");
    })
    .catch((err) => {
        console.error(err);
    });

//server listen port 
app.listen(5000);