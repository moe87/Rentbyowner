import React, { Component } from "react";
import Alert from "../Alert";
import API from "../../utils/API";

class EditHouse extends Component {
  state = {
    address1: "",
    address2: "",
    city:"",
    state: "",
    country: "",
    zipCode:"",
    yearBuilt: "",
    bedrooms:"",
    bathrooms:"",
    builtsqft:"",
    lotsqft:"",
    fee:"",
    rent:"",
    successmsg: "",
    failuremsg: "",
    userId: "",
    houseId: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value === ""? null: value
    });
  };

  componentDidMount() {
    var houseId = this.props.match.params.id;
    console.log("HouseID:"+houseId);
    API.getHouseById(houseId)
        .then(res => {
          console.log(res.data); 
          this.setState({ 
            address1: res.data.address1,
            address2: res.data.address2 == null?"": res.data.address2,
            city: res.data.city == null?"": res.data.city,
            state: res.data.state == null?"": res.data.state,
            country: res.data.country == null?"": res.data.country,
            zipCode: res.data.zipcode == null?"": res.data.zipcode,
            yearBuilt: res.data.yearBuilt == null?"": res.data.yearBuilt,
            bedrooms: res.data.bedrooms,
            bathrooms: res.data.bathrooms,
            builtsqft: res.data.builtsqft,
            lotsqft: res.data.lotsqft == null?"": res.data.lotsqft,
            fee: res.data.fee == null?"": res.data.fee,
            rent: res.data.rent,
            houseId: houseId
          })
        })
        .catch(err => {console.log(err); this.setState({ error: err})})
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      successmsg: "",
      failuremsg: ""
    });

    if(
        !(this.state.address1 && this.state.city &&
        this.state.state && this.state.country && this.state.zipCode &&
        this.state.builtsqft && this.state.rent && this.state.bedrooms && 
        this.state.bathrooms)
      ) {
      this.setState({failuremsg: "Please enter required fields.  Marked as *"});
      return;
    }

    var data = {
      address1: this.state.address1,
      address2: this.state.address2,
      city:this.state.city,
      state: this.state.state,
      country: this.state.country,
      zipcode:this.state.zipCode,
      yearBuilt: this.state.yearBuilt===""?null:this.state.yearBuilt,
      bedrooms:this.state.bedrooms===""?null:this.state.bedrooms,
      bathrooms:this.state.bathrooms===""?null:this.state.bathrooms,
      builtsqft:this.state.builtsqft===""?null:this.state.builtsqft,
      lotsqft:this.state.lotsqft===""?null:this.state.lotsqft,
      fee:this.state.fee===""?null:this.state.fee,
      rent:this.state.rent===""?null:this.state.rent,
      userId: JSON.parse(localStorage.getItem('userInfo')).userId
    }

    API.updateHouseById(data, this.state.houseId)
      .then(res => {
        if(res.data != null) {
          window.location.pathname = '/viewHomes';
        }
      }).catch(err => {
        this.setState({failuremsg: 'Failed to created.  Please try again!!!'});
      });
  };

  render() {
    return(
      <div>
      <Alert type="info" style={{opacity: this.state.successmsg?1:0}}>{this.state.successmsg}</Alert>
      <Alert type="danger" style={{opacity: this.state.failuremsg?1:0}}>{this.state.failuremsg}</Alert>
      <form>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Address <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="123 Main St." 
              name="address1" 
              value={this.state.address1} 
              onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label>Address 2</label>
            <input 
              type="text" 
              className="form-control" 
              name="address2" 
              placeholder="Apartment, Studio, or Floor"
              value={this.state.address2}
              onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>City <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              className="form-control" 
              name="city" 
              placeholder="Richmond"
              value={this.state.city}
              onChange={this.handleInputChange}/>
          </div>
          <div className="form-group col-md-2">
            <label>State <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              className="form-control" 
              name="state"
              placeholder="VA"
              value={this.state.state}
              onChange={this.handleInputChange}/>
          </div>
          <div className="form-group col-md-2">
            <label>Zip <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              className="form-control" 
              name="zipCode"
              placeholder="23233"
              value={this.state.zipCode}
              onChange={this.handleInputChange}/>
          </div>
          <div className="form-group col-md-2">
            <label>Country <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              className="form-control" 
              name="country"
              placeholder="USA"
              value={this.state.country}
              onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-3">
            <label>Bedrooms <span style={{color: 'red'}}>*</span></label>
            <input
              type="text"
              className="form-control"
              name="bedrooms"
              placeholder="4"
              value={this.state.bedrooms}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group col-md-3">
            <label>Bathrooms <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              className="form-control" 
              name="bathrooms"
              placeholder="2"
              value={this.state.bathrooms}
              onChange={this.handleInputChange}/>
          </div>
          <div className="form-group col-md-3">
            <label>Built Sqft <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              className="form-control" 
              name="builtsqft"
              placeholder="1200"
              value={this.state.builtsqft}
              onChange={this.handleInputChange}/>
          </div>
          <div className="form-group col-md-3">
            <label>Lot Sqft</label>
            <input 
              type="text" 
              className="form-control" 
              name="lotsqft"
              placeholder="9300"
              value={this.state.lotsqft}
              onChange={this.handleInputChange}/>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-4">
            <label>Year Built</label>
            <input 
              type="text" 
              className="form-control" 
              name="yearBuilt" 
              placeholder="1998"
              value={this.state.yearBuilt}
              onChange={this.handleInputChange}/>
          </div>
          <div className="form-group col-md-4">
            <label>Rent <span style={{color: 'red'}}>*</span></label>
            <input 
              type="text" 
              className="form-control" 
              name="rent"
              placeholder="1200"
              value={this.state.rent}
              onChange={this.handleInputChange}/>
          </div>
          <div className="form-group col-md-4">
            <label>Fees per month</label>
            <input 
              type="text" 
              className="form-control" 
              name="fee"
              placeholder="100"
              value={this.state.fee}
              onChange={this.handleInputChange}/>
          </div>
        </div>
        <button className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default EditHouse;