//apiRoutes.js
var User = require("../model/user.js");
var House = require("../model/house.js");
var HouseImages = require("../model/houseimages.js");
var Appointments = require("../model/appointments.js");
var Sequelize = require("sequelize");

module.exports = function(app) {

	app.post("/api/user", function(req, res){
		var userData = req.body;
		User.create({
			firstName: userData.firstName,
			lastName: userData.lastName,
			email: userData.email,
			phone: userData.phone,
			password: userData.password
		})
		.then((user) => {res.json(user)})
		.catch((err) => {console.log(err); res.status(500).send(err);});
	});

	app.put("/api/user/:id", function(req, res) {
		User.update(req.body, {where: {userId: req.params.id}})
		.then((user) => {res.json(user)})
		.catch((err) => {console.log(err); res.status(500).send(err);});
	});

	app.get("/api/user/:id", function(req, res) {
		User.findOne({where: {userId: req.params.id}})
		.then((user) => {res.json(user)})
		.catch((err) => {console.log(err); res.status(500).send(err);});
	});

	app.post("/api/login", function(req, res) {
		User.findOne({where: {email: req.body.username, password: req.body.password}})
			.then((user) => {res.json(user)})
			.catch((err) => {console.log(err); res.status(500).send(err);});
	});

	app.post("/api/house", function(req, res) {
		House.create(req.body)
			.then(house => {res.json(house)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});

	app.put("/api/house/:id", function(req, res) {
		House.update(req.body, {where: {houseId: req.params.id}})
			.then(house => {res.json(house)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});

	app.get("/api/house/:id", function(req, res) {
		House.findOne({where: {houseId: req.params.id}})
			.then(house => {res.json(house)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});

	app.delete("/api/house/:id", function(req, res) {
		House.destroy({where: {houseId: req.params.id}})
			.then(house => {res.json(house)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});

	app.get("/api/house/zip/:zipcode", function(req, res) {
		House.findAll({where: {zipcode: req.params.zipcode}})
			.then(house => {res.json(house)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});

	app.get("/api/house/user/:userId", function(req, res) {
		House.findAll({where: {userId: req.params.userId}})
			.then(house => {res.json(house)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});

	app.post("/api/appointment", function(req, res) {
		Appointments.create(req.body)
			.then(appointment => {res.json(appointment)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});

	app.put("/api/appointment/:id", function(req, res) {
		Appointments.update(req.body, {where: {id: req.params.id}})
			.then(appointment => {res.json(appointment)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});

	app.get("/api/appointment/house/:id", function(req, res) {
		const Op = Sequelize.Op;
		Appointments.findAll({
			where: {
				houseId: req.params.id,
				apptDate: {[Op.gte]: new Date()}
			}
		})
			.then(appointment => {res.json(appointment)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});

	app.get("/api/appointment/house/:id/renter", function(req, res) {
		const Op = Sequelize.Op;
		Appointments.findAll({
			where: {
				houseId: req.params.id,
				renterUserId: {[Op.eq]: null},
				apptDate: {[Op.gte]: new Date()}
			}
		})
			.then(appointment => {res.json(appointment)})
			.catch(err => {console.log(err); res.status(500).send(err);})
	});


	app.get("/api/users", function(req, res) {
		User.findAll().then(users => {
			res.json(users);
		});
	});

	app.get("/api/houses", function(req, res) {
		House.findAll().then(houses => {
			res.json(houses);
		});
	});

	app.get("/api/zipcodes", function(req, res) {
		const Op = Sequelize.Op;
		House.findAll({
			where: {
				zipcode: {[Op.ne]: null}
			},
			attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('zipcode')), 'zipcode']]
		}).then(zipcode => {
			let zipcodes = [];
			let i = 0;
			zipcode.forEach(zip => {
				zipcodes[i] = zip.zipcode;
				i++;
			});
			res.json({zipcodes});
		});
	});

	app.get("/api/appointments", function(req, res) {
		Appointments.findAll().then(appointments => {
			res.json(houses);
		});
	});


};
