import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TourCard from './TourCard';

class ShowTourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/tours')
      .then(res => {
        this.setState({
          tours: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowTourList');
      })
  };


  render() {
    const tours = this.state.tours;
    console.log("PrintTour: " + tours);
    let tourList;

    if(!tours) {
      tourList = "there is no tour record!";
    } else {
      tourList = tours.map((tour, k) =>
        <TourCard tour={tour} key={k} />
      );
    }

    return (
      <div className="ShowTourList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Tours List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-tour" className="btn btn-outline-warning float-right">
                + Add New Tour
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {tourList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTourList;