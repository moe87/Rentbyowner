import React, { Component } from "react";
import Alert from "../Alert";
import API from "../../utils/API";
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';

class AddAppt extends Component {
  state = {
    ownerUserId: "",
    houseId: "",
    apptDate: "",
    apptime: "",
    failuremsg: "",
    appointments: []
  };

  componentDidMount() {
    this.setState({ houseId: this.props.match.params.id})
    API.getApptByHouseId(this.props.match.params.id)
      .then(res => this.setState({ appointments: res.data}))
      .catch(err => this.setState({ failuremsg: 'Failed to get appointments!!!'}));
  }

  onDateChange = date => this.setState({ apptDate: date });
  onTimeChange = time => this.setState({ apptime: time });


  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      successmsg: "",
      failuremsg: ""
    });

    if(
        !(this.state.apptDate && this.state.apptime)
      ) {
      this.setState({failuremsg: "Please enter required fields.  Marked as *"});
      return;
    }

    var data = {
      houseId: this.state.houseId,
      apptDate: this.state.apptDate,
      apptime: this.state.apptime,
      ownerUserId: JSON.parse(localStorage.getItem('userInfo')).userId
    }

    API.addAppt(data)
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
      <form>
        <div className="form-row mt-3">
          <div className="form-group col-md-4">
            <label>Appointment Date <span style={{color: 'red'}}>*</span></label>
            <DatePicker
              onChange={this.onDateChange}
              value={this.state.apptDate}
              name="apptDate"
              minDate={new Date()}
            />
          </div>
          <div className="form-group col-md-4">
            <label>Appointment Time <span style={{color: 'red'}}>*</span></label>
            <TimePicker
              onChange={this.onTimeChange}
              value={this.state.apptime}
              name="apptime"
            />
          </div>
        </div>
        <button className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
      </form>
      <Alert className="mt-3" type="danger" style={{opacity: this.state.failuremsg?1:0}}>{this.state.failuremsg}</Alert>
      <table class="table table-sm mt-3">
        <thead>
          <tr>
            <th scope="col">Appointment Date</th>
            <th scope="col">Appointment Time</th>
          </tr>
        </thead>
        <tbody>
          {this.state.appointments.map((result, index) => (
            <tr>
              <td>{result.apptDate}</td>
              <td>{result.apptime}</td>
            </tr>
          ))}  
        </tbody>
        </table>
      </div>
    );
  }
}

export default AddAppt;