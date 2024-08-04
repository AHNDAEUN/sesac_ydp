const express = require('express');
const router =express.Router();
const controller=require('../controller/Cade');


router.get('/',controller.getAde)
router.post('/',controller.postAde)
router.patch('/',controller.patchAde)
router.delete('/',controller.deleteAde)


module.exports=router;