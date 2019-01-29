import React, { Component } from "react";
import Alert from "../Alert";
import API from "../../utils/API";

class Signup extends Component {

  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword:"",
    successmsg: "",
    failuremsg: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
    	successmsg: "",
    	failuremsg: ""
    });

    if(
        !(this.state.firstName && this.state.lastName &&
        this.state.phone && this.state.email && this.state.password &&
        this.state.confirmPassword)
      ) {
      this.setState({failuremsg: "Please enter required fields.  Marked as *"});
      return;
    }

    if(this.state.password !== this.state.confirmPassword) {
      this.setState({failuremsg: "Password and Confirm Password deos not match!!!"});
      return; 
    }

    var data = {
    	firstName: this.state.firstName,
    	lastName: this.state.lastName,
    	email: this.state.email,
    	phone: this.state.phone,
    	password: this.state.password
    }

    API.signup(data)
    	.then(res => {
    		console.log('signup:'+res);
    		if(res.data != null) {
    			this.props.history.push("/login");
    		}
    	}).catch(err => {
    		this.setState({failuremsg: 'Failed to created.  Please try again!!!'});
    	});
	};

  render() {
    return(
      <div>
      <Alert type="danger" style={{opacity: this.state.failuremsg?1:0}}>{this.state.failuremsg}</Alert>
      <form>
      	<div className="form-row">
      		<div className="form-group col-md-6">
      			<label>First Name <span style={{color: 'red'}}>*</span></label>
      			<input 
      				type="text" 
      				className="form-control" 
      				placeholder="First Name" 
      				name="firstName" 
      				value={this.state.firstName} 
      				onChange={this.handleInputChange}/>
      		</div>
      		<div className="form-group col-md-6">
      			<label>Last Name <span style={{color: 'red'}}>*</span></label>
      			<input 
      				type="text" 
      				className="form-control" 
      				placeholder="Last Name"
      				name="lastName"
      				value={this.state.lastName}
      				onChange={this.handleInputChange}/>
      		</div>
      	</div>
      	<div className="form-row">
      		<div className="form-group col-md-6">
      			<label>Email <span style={{color: 'red'}}>*</span></label>
      			<input 
      				type="email" 
      				className="form-control" 
      				name="email" 
      				placeholder="Email"
      				value={this.state.email}
      				onChange={this.handleInputChange}/>
      		</div>
      		<div className="form-group col-md-6">
      			<label>Phone <span style={{color: 'red'}}>*</span></label>
      			<input 
      				type="text" 
      				className="form-control" 
      				name="phone" 
      				placeholder="Phone"
      				value={this.state.phone}
      				onChange={this.handleInputChange}/>
      		</div>
      	</div>
      	<div className="form-row">
      		<div className="form-group col-md-6">
      			<label>Password <span style={{color: 'red'}}>*</span></label>
      			<input 
      				type="password" 
      				className="form-control" 
      				name="password" 
      				placeholder="Password"
      				value={this.state.password}
      				onChange={this.handleInputChange}/>
      		</div>
      		<div className="form-group col-md-6">
      			<label>Confirm Password <span style={{color: 'red'}}>*</span></label>
      			<input 
      				type="password" 
      				className="form-control" 
      				name="confirmPassword"
      				placeholder="Confirm Password"
      				value={this.state.confirmPassword}
      				onChange={this.handleInputChange}/>
      		</div>
      	</div>
      	<button className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </div>
    );
  }
}

export default Signup;