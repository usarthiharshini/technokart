const eventModel = require('../Models/eventModel')

const addEvent = async(req,res)=>{
   
        try {
          
          const event =new eventModel( {
              eventName : req.body.eventName,
              country: req.body.country,
              state: req.body.state,
              city: req.body.country,
              pincode: req.body.pincode,
              image: req.body.image
          })
         
          await event.save()
          res.send(event)
        } catch (error) {
          console.log(error);
          res.send({
              status : "Error",
              message:"Something went wrong"
          })
        }
      
}
const getEvent = async(req,res)=>{
  try {
    const allEvents = await eventModel.find()
   // console.log(allPartners)
        res.send(allEvents) 
} catch (error) {
    res.send({
        status : "Error",
        message: "Something went wrong"
    })
}
}

module.exports = {addEvent,getEvent}