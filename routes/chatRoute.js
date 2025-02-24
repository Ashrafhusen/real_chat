const express = require('express')
const {fetchChatHistory} = require('../controllers/chatControllers')

const router = express.Router();

router.get('/history' , fetchChatHistory)

module.exports = router;


