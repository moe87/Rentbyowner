import axios from "axios";

export default {
	getHousesByZipCode: function(zipCode) {
		return axios.get("https://rocky-stream-14694.herokuapp.com/api/house/zip/"+zipCode);
	},
	getHouses: function() {
		return axios.get("https://rocky-stream-14694.herokuapp.com/api/houses");
	},
	getZipCodes: function() {
		return axios.get("https://rocky-stream-14694.herokuapp.com/api/zipcodes");
	},
	login: function(username, password) {
		return axios.post("https://rocky-stream-14694.herokuapp.com/api/login", { username: username, password: password });
	},
	signup: function(data) {
		return axios.post("https://rocky-stream-14694.herokuapp.com/api/user", data);
	},
	addHouse: function(data) {
		return axios.post("https://rocky-stream-14694.herokuapp.com/api/house", data);
	},
	getHousesByUserId: function(userId) {
		return axios.get("https://rocky-stream-14694.herokuapp.com/api/house/user/"+userId);
	},
	deletHouseById: function(houseId) {
		return axios.delete("https://rocky-stream-14694.herokuapp.com/api/house/"+houseId);
	},
	getHouseById: function(houseId) {
		return axios.get("https://rocky-stream-14694.herokuapp.com/api/house/"+houseId);
	},
	updateHouseById: function(data, houseId) {
		return axios.put("https://rocky-stream-14694.herokuapp.com/api/house/"+houseId, data);
	},
	addAppt: function(data) {
		return axios.post("https://rocky-stream-14694.herokuapp.com/api/appointment", data);
	},
	getApptByHouseId: function(houseId) {
		return axios.get("https://rocky-stream-14694.herokuapp.com/api/appointment/house/"+houseId);
	},
	getApptByRenterNull: function(houseId) {
		return axios.get("https://rocky-stream-14694.herokuapp.com/api/appointment/house/"+houseId+"/renter");
	},
	rentHouse: function(id, renterUserId) {
		return axios.put("https://rocky-stream-14694.herokuapp.com/api/appointment/"+id, {"renterUserId": renterUserId});
	}
};
