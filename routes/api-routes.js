// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Apartment model
var db = require("../models");


module.exports = function(app) {

	// GET route for getting all of the apartments
	app.get("/api/apartments", function(req, res) {
		// findAll returns all entries for a table when used with no options
		db.Apartment.findAll({}).then(function(dbApartment) {
		  // We have access to the apartments as an argument inside of the callback function
		  res.json(dbApartment);
		});
	  });

	app.get("/api/:zip", function(req,res) {

		db.Apartment.findOne({
			where: {
				zip: req.params.zip
			}
		})
			.then(function(dbZip) {
				console.log(dbZip);
				res.json(dbZip);
		});
	});
}