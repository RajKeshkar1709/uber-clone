const express = require('express')
const router = express.Router()
const {captainRegister,loginCaptain,getCaptainProfile} = require('../controllers/captain.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.post('/register',captainRegister)
router.post('/login',loginCaptain)
router.get('/profile',authMiddleware,getCaptainProfile)

module.exports = router