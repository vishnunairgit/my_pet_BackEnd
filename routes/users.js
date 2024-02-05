var express = require('express');
const { getAllDogPetsData , getSinglePetData, getMyBookingData } = require('../controllers/userController');
const { userAuth } = require('../middlewares/Authorization');
var router = express.Router();

/* GET users listing. */
router.get('/getAllDogPetsData', userAuth, getAllDogPetsData)
router.get('/getSinglePetData', userAuth, getSinglePetData)
router.get('/getMyBookingData', userAuth, getMyBookingData)



module.exports = router;
