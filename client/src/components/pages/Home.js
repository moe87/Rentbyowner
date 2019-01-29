import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Action from "../../components/Action";

class Home extends Component {
  state = {
    search: "",
    zipcodes: [],
    results: [],
    error: ""
  };

  componentDidMount() {
    API.getZipCodes()
        .then(res => {console.log(res.data.zipcodes);this.setState({ zipcodes: res.data.zipcodes })})
        .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getHousesByZipCode(this.state.search)
        .then(res => {console.log(res.data); this.setState({ results: res.data })})
        .catch(err => {console.log(err); this.setState({ error: err})})
  };
  render() {
    return (
      <div className="container">
        <Action />
        <SearchForm
          handleFormSubmit = {this.handleFormSubmit}
          handleInputChange = {this.handleInputChange}
          zipcodes={this.state.zipcodes}
        />
        <SearchResults results={this.state.results} key="searchResults"/>
      </div>
    );
  }
}

export default Home;
