import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
  	<footer className="d-flex justify-content-center p-3 mt-3 bg-dark text-white">
  		&copy; Rent by Owner&nbsp;|&nbsp;<Link to="/contact"  className="text-white no-cursor">Contact</Link>
	</footer>
  );
}

export default Footer;