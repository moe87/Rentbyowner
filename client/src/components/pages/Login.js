import React, { Component } from "react";
import API from "../../utils/API";
import Alert from "../Alert";

class Login extends Component {

  state = {
    username: "",
    password: "",
    results: [],
    msg: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({msg: ""});

    if(!(this.state.username && this.state.password)) {
      this.setState({ msg: 'Enter valid email and password!!!'});
      return;
    }

    API.login(this.state.username, this.state.password)
        .then(res => {
          console.log(res); 
          if(res.data != null) {
            this.setState({ results: res.data });
            localStorage.setItem("userInfo", JSON.stringify(res.data));
            this.props.history.push("/");
          } else {
            this.setState({ results: [] });
            this.setState({ msg: 'Enter valid email and password!!!'});
          }
        })
        .catch(err => {console.log(err); this.setState({ error: err})})

  };

  render() {
    return(
      <div className="row mt-5 mb-5">
      <Alert type="danger" style={{opacity: this.state.msg?1:0}}>{this.state.msg}</Alert>
      <div className="col">
        <form className="mx-auto" style={{width: 300}}>
          <div className="form-group">
            <label>Email address</label>
            <input 
              className="form-control"
              type="email"
              placeholder="Enter Email"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;