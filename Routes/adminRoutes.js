const express = require('express');
const adminRouter = express.Router();
const {addPartner,updatePartner,getPartner,deletePartner} = require('../Controllers/adminFunctions')

adminRouter.route('/getPartner').get(getPartner)
adminRouter.route('/addPartner').post(addPartner)
adminRouter.route('/updatePartner/:id').put(updatePartner)
adminRouter.route('/deletePartner/:id').delete(deletePartner)

module.exports= adminRouter;