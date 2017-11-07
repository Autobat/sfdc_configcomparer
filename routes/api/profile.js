var express 			= require('express');
var q 					= require('q');
var router 				= express.Router();

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

	return q.spread([
			function() {return true},
			function() {return true},
			function() {return true}
		],
		function(profiles, objects, permissions) {
			res.json({result: 'Returning evaluation of : ' + req.params.profile_id});

		}).catch(function(err) {
			res.json({result: 'Returning evaluation of : ' + req.params.profile_id, err: err});
		})
		.done(function() {
			console.log('Done Evaluating Profile');
		});
});

module.exports = router;