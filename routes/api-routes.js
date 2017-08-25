// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Apartment model
var db = require("../models");


module.exports = function(app) {

	app.get("/api/apartments", function(req,res) {

			// we received req.query object
			// how to create  "where" instance to exclude the empty fields
			// now need to "split" the query string and use the values

			//console.log(req.query);

			// var req = req;

			// encode the url string so you eliminate  "&" etc...
			// req = decodeURIComponent(req);

			// console.log(req);

			// var query = {};

			// if(req.query.address) {
			// 	query.address = req.query.address;
			// }

			// if(req.query.city) {
			// 	query.city = req.query.city;
			// }

			// if(req.query.state){
			// 	query.state = req.query.state;
			// }

			// if(req.query.zip) {
			// 	query.zip = req.query.zip;
			// }


			// if(req.query.lat) {
			// 	query.lat = req.query.lat;
			// }

			// if(req.query.long) {
			// 	query.long = req.query.long;
			// }

			// if(req.query.image_url) {
			// 	query.image_url = req.query.image_url;
			// }

			// console.log(query);


		db.Apartment.findAll({})
			.then(function(receivedSearchInfo) {
				console.log(receivedSearchInfo);
				res.json(receivedSearchInfo);
			});

	});

	// app.get("/api/:city?", function(req, res) {
	// 	var city = req.params.city;
	// 	db.Apartment.findAll({
	// 		// here we ill use our query var
	// 		// where: {
	// 		// 	city
	// 		// }

	// 	}).then(function(receivedSearchInfo) {
	// 		console.log(receivedSearchInfo);
	// 		res.json(receivedSearchInfo);
	// 	});
	// });

}