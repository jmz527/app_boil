var models  = require('../models');
var express = require('express');
var router = express.Router();

// // allow CORS
// router.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

router.get('/', function(req, res) {
	res.send('TUBR API')
});

module.exports = router;