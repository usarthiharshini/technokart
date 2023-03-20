const express = require('express');
const partnerRouter = express.Router();
const {addEvent,getEvent} = require('../Controllers/partnerFunctions')

partnerRouter.route('/getEvent').get(getEvent)
partnerRouter.route('/addEvent').post(addEvent)




module.exports= partnerRouter;