import React from "react";

function SearchResults(props) {

	function rentHouse(e) {
  		e.preventDefault();
  		window.location.pathname = '/rentHouse/'+e.target.value;
  	}
  
  return (
  	<div className="card-deck">
  		{props.results.map(result => (	
	  		<div className="card" key={result.houseId} style={{width: 300}}>
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
	  				{
	  					localStorage.getItem("userInfo") == null ?
	  					<button type="button" className="btn btn-success"  disabled>Rent</button> :
	  					<button type="button" className="btn btn-success" onClick={rentHouse} value={result.houseId}>Rent</button>
	  				}
	  			</div>
	  		</div>
	  	))}
  	</div>
  );
}

export default SearchResults;
