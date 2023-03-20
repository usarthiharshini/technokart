const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type: String
    },
    link:{
        type: String
    }
})
module.exports= mongoose.model('Partner',partnerSchema)