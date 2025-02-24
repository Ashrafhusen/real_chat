const Message = require('../models/Message')


const saveMessage = async(userName , message) => {
    const newMessage = new Message({userName  , message});
    await newMessage.save();
    return newMessage;
}

const getChatHistory = async() => {
    return await Message.find().sort({timestamp : 1}).limit(50)
}


module.exports = {saveMessage , getChatHistory}
