const express = require('express')
const router = express.Router()
const login = require('./login')
const { signup, verify } = require('./signup')
const leaderboard = require('./leaderboard')
const update_highscore = require('./update_highscore')

router.post('/login', login)

router.post('/signup', verify, signup)

router.get('/leaderboard', leaderboard)

router.post('/update_highscore', update_highscore)

module.exports = router