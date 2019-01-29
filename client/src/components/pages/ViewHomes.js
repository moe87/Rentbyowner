import React, { Component } from "react";
import API from "../../utils/API";
import ViewHomeResults from "../../components/ViewHomeResults";

class ViewHomes extends Component {
  state = {
    results: [],
    failureMsg: "",
    result: ""
  };

  componentDidMount() {
    var userId = JSON.parse(localStorage.getItem("userInfo")).userId;
    API.getHousesByUserId(userId)
        .then(res => {console.log(res.data); this.setState({ results: res.data })})
        .catch(err => {console.log(err); this.setState({ error: err})})
  }

  render() {
    return (
      <div className="container mt-3">
        <ViewHomeResults results={this.state.results} key="viewHomeResults" />
      </div>
    );
  }
}

export default ViewHomes;
