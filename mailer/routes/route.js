const router = require('espress').Router();

const {signup} = require('.../controller/appController.js')

router.post('/user/singup', signup);
router.post('/product/GetBill')