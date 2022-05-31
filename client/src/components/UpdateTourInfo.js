import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateTourInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      country: "",
      city: "",
      price: "",
      hotel: "",
      tourduration: "",
      departuredate: "",
      arrivaldate: "",
      numberofperson: "",
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/tours/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, tour: res.data})
        this.setState({
          title: res.data.title,
          country: res.data.country,
          city: res.data.city,
          price: res.data.price,
          hotel: res.data.hotel,
          tourduration: res.data.tourduration,
          departuredate: res.data.departuredate,
          arrivaldate: res.data.arrivaldate,
          numberofperson: res.data.numberofperson
        })
      })
      .catch(err => {
        console.log("Error from UpdateTourInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      country: this.state.country,
      city: this.state.city,
      price: this.state.price,
      hotel: this.state.hotel,
      tourduration: this.state.tourduration,
      departuredate: this.state.departuredate,
      arrivaldate: this.state.arrivaldate,
      numberofperson: this.state.numberofperson,
    };

    axios
      .put('http://localhost:8082/api/tours/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-tour/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateTourInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateTourInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Tour List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Tour</h1>
              <p className="lead text-center">
                  Update Tour's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Tour'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                placeholder="Country"
                name="country"
                className="form-control"
                value={this.state.country}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                placeholder="City"
                name="city"
                className="form-control"
                value={this.state.city}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="form-control"
                value={this.state.price}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="hotel">Hotel</label>
              <input
                type="text"
                placeholder="Hotel"
                name="hotel"
                className="form-control"
                value={this.state.hotel}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tour duration">Tour duration</label>
              <input
                type="text"
                placeholder="Tour duration"
                name="tourduration"
                className="form-control"
                value={this.state.tourduration}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="departure date">Departure date</label>
              <input
                type="date"
                placeholder="Departure date"
                name="departuredate"
                className="form-control"
                value={this.state.departuredate}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="arrival date">Arrival date</label>
              <input
                type="date"
                placeholder="Arrival date"
                name="arrivaldate"
                className="form-control"
                value={this.state.arrivaldate}
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="number of person">Number of person</label>
              <input
                type="text"
                placeholder="Number of person"
                name="numberofperson"
                className="form-control"
                value={this.state.numberofperson}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Tour</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateTourInfo;