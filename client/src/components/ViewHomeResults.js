import React from "react";
import API from "../utils/API";

function ViewHomeResults(props) {

  function deleteHome(e) {
  	e.preventDefault();
  	var id = e.target.value;
  	API.deletHouseById(id)
  		.then(function() {
  			document.getElementById(id).remove();
  		});
  }

  function editHome(e) {
  	e.preventDefault();
  	window.location.pathname = '/editHouse/'+e.target.value;
  }

  function addAppt(e) {
  	e.preventDefault();
  	window.location.pathname = '/addAppt/'+e.target.value;
  }

  return (
  	<div className="card-deck">
  		{props.results.map(result => (	
	  		<div className="card" key={result.houseId} style={{width: 300}} id={result.houseId}>
	  			<img src="/images/sorry-image-not-available.png" className="img-thumbnail card-img-left rounded" alt="Not available"/>
	  			<div className="card-body">
	  				<h5 className="card-title">{result.address1} {result.address2} {result.city} {result.state} {result.zipcode}</h5>
	  			</div>
	  			<ul className="list-group search-results">
					<li className="list-group-item list-group-item-dark">
						Year Built: {result.yearBuilt}
					</li>
					<li className="list-group-item list-group-item-dark">
						Bedrooms: {result.bedrooms}
					</li>
					<li className="list-group-item list-group-item-dark">
						Bathrooms: {result.bathrooms}
					</li>
					<li className="list-group-item list-group-item-dark">
						Built sqft: {result.builtsqft}
					</li>
					<li className="list-group-item list-group-item-dark">
						Lot sqft: {result.lotsqft}
					</li>
					<li className="list-group-item list-group-item-dark">
						Rent &amp; Fee: {result.rent} / {result.fee}
					</li>
				</ul>
	  			<div className="card-footer">
	  				<button type="button" className="btn btn-success" onClick={editHome} value={result.houseId}>Edit</button>
	  				<button type="button" className="btn btn-success ml-2" onClick={deleteHome} value={result.houseId}>Delete</button>
	  				<button type="button" className="btn btn-success ml-2" onClick={addAppt} value={result.houseId}>Add Appointment</button>
	  			</div>
	  		</div>
	  	))}
  	</div>
  );
}

export default ViewHomeResults;
