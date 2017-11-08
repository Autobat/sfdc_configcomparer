var express 			= require('express');
var q 					= require('q');
var router 				= express.Router();

var parseString 		= require('xml2js').parseString;

/************************************************************************************************
 *
 */
router.get('/', function(req, res) {
	console.log('Someone is GETing /');
	res.json({});
});

/************************************************************************************************
 *
 */
router.post('/evaluate', function(req, res) {
	console.log('Someone is POSTing profiles to evaluate');

	console.log(req.body);

	return q.spread([
			function() {return true},
			function() {return true},
			function() {return true}
		],
		function(profiles, objects, permissions) {
			res.json({result: 'Returning evaluation of profile', req: req.params});

		}).catch(function(err) {
			res.json({result: 'Error in evaluation of profile', req: req.params, err: err});
		})
		.done(function() {
			console.log('Done Evaluating Profile');
		});
});

module.exports = router;