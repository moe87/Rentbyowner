import axios from "axios";

export default {
	getHousesByZipCode: function(zipCode) {
		return axios.get("http://localhost:3000/api/house/zip/"+zipCode);
	},
	getHouses: function() {
		return axios.get("http://localhost:3000/api/houses");
	},
	getZipCodes: function() {
		return axios.get("http://localhost:3000/api/zipcodes");
	},
	login: function(username, password) {
		return axios.post("http://localhost:3000/api/login", { username: username, password: password });
	},
	signup: function(data) {
		return axios.post("http://localhost:3000/api/user", data);
	},
	addHouse: function(data) {
		return axios.post("http://localhost:3000/api/house", data);
	},
	getHousesByUserId: function(userId) {
		return axios.get("http://localhost:3000/api/house/user/"+userId);
	},
	deletHouseById: function(houseId) {
		return axios.delete("http://localhost:3000/api/house/"+houseId);
	},
	getHouseById: function(houseId) {
		return axios.get("http://localhost:3000/api/house/"+houseId);
	},
	updateHouseById: function(data, houseId) {
		return axios.put("http://localhost:3000/api/house/"+houseId, data);
	},
	addAppt: function(data) {
		return axios.post("http://localhost:3000/api/appointment", data);
	},
	getApptByHouseId: function(houseId) {
		return axios.get("http://localhost:3000/api/appointment/house/"+houseId);
	},
	getApptByRenterNull: function(houseId) {
		return axios.get("http://localhost:3000/api/appointment/house/"+houseId+"/renter");
	},
	rentHouse: function(id, renterUserId) {
		return axios.put("http://localhost:3000/api/appointment/"+id, {"renterUserId": renterUserId});
	}
};