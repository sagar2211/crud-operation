const express = require('express')
const router = express.Router();
const { createNewUser, updateUser, deleteUser, getAllUser, getUser } = require('../controller/userController');

// create User
router.post('/create', createNewUser);

// update User
router.patch('/update', updateUser);

// delete user
router.delete('/delete/:id', deleteUser);

// get All User
router.get('/all', getAllUser);

// get User
router.get('/:id', getUser);

module.exports = router;