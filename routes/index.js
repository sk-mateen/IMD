var express = require('express');
var router = express.Router();
var dbConfig= require('../config/default.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IMD FOOD SERVICES' });
});

router.get('/data',()=>{
  mongoose.connect(dbConfig.food.review).then(()=>{
    console.log("database connected");
  })
});
module.exports = router;
