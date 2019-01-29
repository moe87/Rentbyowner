DROP DATABASE IF EXISTS rentbyowner;

CREATE DATABASE rentbyowner;

USE rentbyowner;

CREATE TABLE user (
  userId integer primary key AUTO_INCREMENT,
  firstName varchar(25),
  lastName varchar(25),
  phone bigint,
  email varchar(25) NOT NULL UNIQUE,
  password varchar(100)
);

CREATE TABLE house (
	houseId integer primary key AUTO_INCREMENT,
	houseType varchar(25),
	address1 varchar(50),
	address2 varchar(50),
	aptNo integer,
	state char(2),
	country varchar(25),
	zipcode bigint,
	yearBuilt integer,
	bedrooms integer,
	bathrooms integer,
	builtsqft integer,
	lotsqft integer,
	fee integer,
	rent integer,
	userId integer,
	FOREIGN KEY fkUserHouse (userId) REFERENCES user(userId) ON DELETE CASCADE
);

CREATE TABLE appointments (
	id integer primary key AUTO_INCREMENT,
	ownerUserId integer,
	houseId integer,
	apptDate date,
	apptime time,
	renterUserId integer,
	FOREIGN KEY fkUserAppointments (ownerUserId) REFERENCES user(userId) ON DELETE CASCADE,
	FOREIGN KEY fkUserAppointmentsRenter (renterUserId) REFERENCES user(userId) ON DELETE CASCADE,
	FOREIGN KEY fkHouseAppointments (houseId) REFERENCES house(houseId) ON DELETE CASCADE
);

CREATE TABLE houseImages (
	houseId integer,
	image1 BLOB,
	image2 BLOB,
	image3 BLOB,
	image4 BLOB,
	FOREIGN KEY fkHouseHouseImage (houseId) REFERENCES house(houseId) ON DELETE CASCADE
);

create user rentbyowner@localhost identified with mysql_native_password by 'rentbyowner';
grant all privileges on rentbyowner.* to rentbyowner@localhost;