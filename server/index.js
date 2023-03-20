

const express = require('express');
const { default: mongoose } = require('mongoose');
const adminRouter = require('./Routes/adminRoutes')
const partnerRouter = require('./Routes/partnerRoutes')
require("dotenv").config()
const app = express();
app.use(express.json())
app.use('/',adminRouter)
app.use('/partner',partnerRouter)

const connectDB = async()=>{
    try {

      
       await mongoose.connect(process.env.MONGO);
        console.log('DB connection established')
    } catch (error) {
        console.log(error)
    }
   
}
const PORT = process.env.PORT || 8080

connectDB().then(()=> app.listen(PORT,()=>{    
    console.log("server  running")
}))