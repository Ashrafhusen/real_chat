const chatService = require('../services/chatService')

const fetchChatHistory = async(req , res) => {
    try {
        const message = await chatService.getChatHistory();
        res.status(200).json(message)
        
    } catch (error) {
        res.status(500).json({message : "Server Error" , error: error.message})
        
    }
}

module.exports = {fetchChatHistory}


