const partnerModel = require('../Models/partnerModel')

const addPartner = async(req,res)=>{
  try {
    
    const partner =new partnerModel( {
        name : req.body.name,
        email: req.body.email,
        link: `http://localhost:3000/${req.body.name}/login`
    })
   
    await partner.save()
    res.send(partner)
  } catch (error) {
    console.log(error);
    res.send({
        status : "Error",
        message:"Something went wrong"
    })
  }
}
const getPartner = async(req,res)=>{
try {
    const allPartners = await partnerModel.find()
    console.log(allPartners)
        res.send(allPartners) 
} catch (error) {
    res.send({
        status : "Error",
        message: "Something went wrong"
    })
}

}
const updatePartner = async(req,res)=>{
    try {
        let id = req.params.id;
        console.log(id)
   let updated=  await partnerModel.findByIdAndUpdate(id,{
            name : req.body.name,
            email: req.body.email
        })
     res.send({
            status: "success",
            message : "updated successfully",
            details: updated})

    } catch (error) {
        res.send({
            status : "Error",
            message: "Something went wrong"
        })
    }
}
const deletePartner = async(req,res)=>{
    try {
        let id = req.params.id;
        console.log(id)
    let deleted=   await partnerModel.findByIdAndDelete(id)
   
     res.send({
            status: "success",
            message : "deleted successfully",
            details: deleted})

    } catch (error) {
        res.send({
            status : "Error",
            message: "Something went wrong"
        })
    }
}

module.exports= {addPartner, getPartner, updatePartner, deletePartner}