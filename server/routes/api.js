var express = require('express')
var router = express.Router()
var controllers = require('../controllers')
// var turbo = require('turbo360')({site_id: '<APP_ID>'})

router.get('/:resource', function(req, res, next){
	var resource = req.params.resource
	res.json({
		confirmation: 'success',
		resource: resource
	})
})


module.exports = router