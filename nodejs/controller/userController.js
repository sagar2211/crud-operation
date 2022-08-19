const { User } = require("../model/userModel");
var _ = require('lodash');
// create new user
exports.createNewUser = async (req, res) => {
    const newUser = new User(req.body);
    try {
        let isExist = await isUserAlreadyExist(req.body.email)
        if(_.isEmpty(isExist)){
            const data = await newUser.save();
            res.send(data);
        } else {
            let obj = {
                message : "User already Exists.",
                error : true
            }
            res.send(obj);
        }
        
    } catch (err) {
        res.send(err)
    }
}

// update user
// update user
exports.updateUser = async (req, res) => {
    var updateObject = req.body;
    try {
        let id = req.body._id;
        
        let data = await User.findByIdAndUpdate(id,
            {
                $set: {
                    "firstname": updateObject.firstname,
                    "lastname": updateObject.lastname,
                    "email": updateObject.email,
                    "phone": updateObject.phone,
                    "image": updateObject.image
                }
            },
            { new: true })
            res.status(200).send(data);
        console.log(data);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

// delete user
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        let responseObj = {
            error : false,
            message : "data deleted successfully...!!!"
        }
        res.send(responseObj);
    } catch (error) {
        res.send(error)
    }
}

// get all user
exports.getAllUser = async (req, res) => {
    try {
        const data = await User.find();
        console.log('data', data);
        res.send(data);
    } catch (err) {
        res.send(err);
    }
}

// get user info
exports.getUser = async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        console.log('data', data);
        res.send(data);
    } catch (err) {
        res.send(err);
    }
}

async function isUserAlreadyExist(email){
    try {
        const data = await User.find({email : email});
        console.log('data', data);
        return data
    } catch (err) {
        console.log(err);
    }
}