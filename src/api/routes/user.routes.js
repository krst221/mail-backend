const express = require('express')
const router = express.Router()
const {isAuth} = require('../../middlewares/auth');

const {register, login, getUser, getUserById, getAllUsers, logout, putUserName, putUserPicture, deleteUser} = require('../controllers/user.controller')

router.get('/', [isAuth], getAllUsers);
router.post('/register', register);
router.post('/login', login);
router.post('/getUser', [isAuth], getUser);
router.post('/getUser/id', [isAuth], getUserById);
router.post('/logout', logout);
router.put('/name', [isAuth], putUserName);
router.put('/picture', [isAuth], putUserPicture);
router.put('/', [isAuth], deleteUser);

module.exports = router;