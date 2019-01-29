import React from "react";

function Action() {
  
  function addHouse(e) {
    e.preventDefault();
    window.location.pathname='/addHouse';
  }

  function viewHomes(e) {
    e.preventDefault();
    window.location.pathname='/viewHomes';
  }
  
  var isUserLogin = localStorage.getItem("userInfo") == null ? false: true;
  return(
    <div className="row mt-2" style={{display: isUserLogin?'block':'none'}}>
      <div className="col">
        <button type="button" className="btn btn-success" onClick={addHouse}>Add House</button>
        <button type="button" className="btn btn-success ml-2" onClick={viewHomes}>View Homes</button>
      </div>
    </div>
  );
}

export default Action;