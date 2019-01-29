import React, { Component } from "react";
import Alert from "../Alert";
import API from "../../utils/API";

class RentHouse extends Component {
  state = {
    renterUserId: "",
    failuremsg: "",
    appointments: []
  };

  componentDidMount() {
    this.setState({ houseId: this.props.match.params.id})
    API.getApptByRenterNull(this.props.match.params.id)
      .then(res => this.setState({ appointments: res.data}))
      .catch(err => this.setState({ failuremsg: 'Failed to get appointments!!!'}));
  }

  bookIt = event => {
    event.preventDefault();
    var id = event.target.value;
    var renterUserId = JSON.parse(localStorage.getItem('userInfo')).userId
    API.rentHouse(id, renterUserId)
      .then(function(res) {
          document.getElementById(id).remove();
          document.getElementById('action_'+id).append('Booked');
      });
  };
 
  render() {
    return(
      <div>
      <Alert type="danger" style={{opacity: this.state.failuremsg?1:0}}>{this.state.failuremsg}</Alert>
      <table className="table table-sm mt-3">
        <thead>
          <tr>
            <th scope="col">Appointment Date</th>
            <th scope="col">Appointment Time</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.appointments.map((result, index) => (
            <tr key={index}>
              <td>{result.apptDate}</td>
              <td>{result.apptime}</td>
              <td id={"action_"+result.id}><button id={result.id} 
                  type="button" 
                  className="btn btn-success" 
                  value={result.id}
                  style={{display: result.renterUserId !=null ? 'none':'block'}}
                  onClick={this.bookIt}>Book appointment</button></td>
            </tr>
          ))}  
        </tbody>
        </table>
        </div>
    );
  }
}

export default RentHouse;