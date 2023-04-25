import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import axios from "axios";
import Navbar from "./Navbar";

class CreateTour extends Component {
  constructor() {
    super();
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

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
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
      .post("http://localhost:8082/api/tours", data)
      .then((res) => {
        this.setState({
          title: "",
          country: "",
          city: "",
          price: "",
          hotel: "",
          tourduration: "",
          departuredate: "",
          arrivaldate: "",
          numberofperson: "",
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("Error in CreateTour!");
      });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="CreateTour">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                  Show Tour List
                </Link>
              </div>
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Add Tour</h1>
                <p className="lead text-center">Create new Tour</p>

                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Title of the Tour"
                      name="title"
                      className="form-control"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </div>
                  <br />

                  <div className="form-group">
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
                    <input
                      type="text"
                      placeholder="Number of person"
                      name="numberofperson"
                      className="form-control"
                      value={this.state.numberofperson}
                      onChange={this.onChange}
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateTour;
