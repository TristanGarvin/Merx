const express = require('express')
const {gamepost} = require('../controllers')
const router = express.Router()

router.post('/blogpost', blogpost.postBlogpost)

module.exports = router