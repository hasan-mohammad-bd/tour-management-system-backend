const express = require("express");
const router = express.Router();
const packageController = require('../controlers/package.controler')


router.route('/trending')
    .get(packageController.getTrendingPackage)
router.route('/cheapest')
    .get(packageController.getCheapestPackage)
   
router.route('/')
    .get(packageController.getPackage)
    .post(packageController.createPackage)

router.route('/:id')
    .get(packageController.getPackageDetails)
    .patch(packageController.updatePackage)

module.exports = router;