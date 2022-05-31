import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class showTourDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tour: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/tours/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showTourDetails-API-response: " + res.data);
        this.setState({
          tour: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowTourDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:8082/api/tours/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowTourDetails_deleteClick");
      })
  };


  render() {

    const tour = this.state.tour;
    let TourItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ tour.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Country</td>
            <td>{ tour.country }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>City</td>
            <td>{ tour.city }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Price</td>
            <td>{ tour.price }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Hotel</td>
            <td>{ tour.hotel }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Tour duration</td>
            <td>{ tour.tourduration }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Departure date</td>
            <td>{ tour.departuredate }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Arrival date</td>
            <td>{ tour.arrivaldate }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Number of person</td>
            <td>{ tour.numberofperson }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowTourDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Tour List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Tour's Record</h1>
              <p className="lead text-center">
                  View Tour's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { TourItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,tour._id)}>Delete Tour</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-tour/${tour._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Tour
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Tour</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Tour</button> */}

        </div>
      </div>
    );
  }
}

export default showTourDetails;