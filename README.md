#Rent By Owner
Application will enable home owners to post house for rent and control when a renter can request an appointment.

## Instructions to run the applications
1. Download or Clone the git repository
2. Goto root folder (rentbyowner), run following commands:
	- ```npm init -y```
	- ```npm install express```
	- ```npm install sequelize```
	- ```npm install mysql2```
3. Run the ```rentbyowner.sql``` in MySQL Workbench.
4. Goto root folder (rentbyowner), run following command:
	- ```node server.js```

Application will be running on ```3000``` port.

## Testing an application
1. Install a RESTED addon in Chrome.
2. Select following options:
	####Creating a User:
	POST http://localhost:3000/api/user
	{
		"firstName": "Al",
		"lastName": "Moe",
		"email": "almoe@gmail.com",
		"phone": "8043327874",
		"password": "Password"
	}

	POST http://localhost:3000/api/user
	{
		"firstName": "Aladin",
		"lastName": "Mohamad",
		"email": "almo@gmail.com",
		"phone": "8043328874",
		"password": "Password1"
	}

	####Updating a User:
	PUT http://localhost:3000/api/user/1
	{
		"lastName": "Mohamed"
	}

	####Getting all Users:
	GET http://localhost:3000/api/users

	####Getting one User:
	GET http://localhost:3000/api/user/1

	####Creating a House:
	POST http://localhost:3000/api/house
	{
		"address1" : "12345 Hello Dr",
		"address2" : "",
		"state": "VA",
		"country": "USA",
		"zipcode": "23548",
		"yearBuilt": "1999",
		"bedrooms": "4",
		"bathrooms": "3",
		"builtsqft": "2400",
		"lotsqft": "9000",
		"fee": "200",
		"rent": "2000",
		"userId": "1"
	}

	####Updating a House:
	PUT http://localhost:3000/api/house/1
	{
		"address1" : "1000 Update Dr",
		"rent": "2500"
	}

	####Get all House:
	GET http://localhost:3000/api/houses

	####Get one House:
	GET http://localhost:3000/api/house/1

	####Creating an Appointment
	POST http://localhost:3000/api/appointment
	{
		"ownerUserId": "1",
		"houseId":"1",
		"apptDate": "01/22/2019",
		"appttime": "23:00",
		"renterUserId": "2"
	}

	####Update an Appointment
	PUT http://localhost:3000/api/appointment/1
	{
		"apptDate": "01/22/2019",
		"apptime": "11:00"
	}

	####Get all Appointments
	GET http://localhost:3000/api/appointments

	####Get one Appointment
	GET http://localhost:3000/api/appointment/1
