

const express = require('express');
const { default: mongoose } = require('mongoose');
const adminRouter = require('./Routes/adminRoutes')
const partnerRouter = require('./Routes/partnerRoutes')
require('dotenv').config()
const app = express();
app.use(express.json())
app.use('/admin',adminRouter)
app.use('/partner',partnerRouter)

const connectDB = async()=>{
    try {

       console.log(process.env.MONGO)
       await mongoose.connect(process.env.MONGO);
        console.log('DB connection established')
    } catch (error) {
        console.log(error)
    }
   
}

connectDB().then(()=> app.listen(3003,()=>{    
    console.log("server  running")
}))