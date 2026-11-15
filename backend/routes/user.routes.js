const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth.middleware')
const {userRegister,loginUser,getUserProfile} = require('../controllers/user.controller')


router.post('/register',userRegister)
router.post('/login',loginUser)
router.get('/profile', authMiddleware, getUserProfile)

module.exports = router