const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String
    },
    country: {
        type: String
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    pincode:{
        type: Number
    },
    image: {
        type: String
    }
})
module.exports= mongoose.model('Event',eventSchema)