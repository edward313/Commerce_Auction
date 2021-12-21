var express = require('express');
var router = express.Router();
var BillController = require('../controller/bill.controller');

router.get('/list',BillController.get_all);

module.exports = router;