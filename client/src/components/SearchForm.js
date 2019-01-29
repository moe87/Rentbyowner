import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <div className="row mt-5 mb-5">
      <div className="col">
        <form className="mx-auto" style={{width: 300}}>
          <h3>Rent By Owners (RBO)</h3>
          <p>Find your home, apartment, condo for rent.  Properties are posted by the owners.</p>
          <div className="input-group ">
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="zipcode"
              list="zipcodes"
              type="text"
              className="form-control "
              placeholder="Search by zip codes..."
              id="zipcode"
            />
            <datalist id="zipcodes">
              {props.zipcodes.map(zipcode => (
                  <option value={zipcode} key={zipcode} />
              ))}
            </datalist>
            <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
