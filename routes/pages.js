var express = require('express')
var router = express.Router();
var PageController = require('../controllers/pageController');
const {check, validationResult} = require('express-validator/check');
const {matchedData, sanitize} = require('express-validator/filter');


// define the home page route
router.get('/', PageController.pageSinglePostHome);

module.exports = router;