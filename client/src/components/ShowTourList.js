import { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
import TourCard from "./TourCard";
import Navbar from "./Navbar";
import { useRecoilValue } from "recoil";

import { authAtom } from "../state";

function ShowTourList() {
  const auth = useRecoilValue(authAtom);

  const [tours, setTours] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/tours")
      .then((res) => {
        setTours(res.data);
      })
      .catch((err) => {
        console.log("Error from ShowTourList");
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="ShowTourList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Available tours</h2>
            </div>

            <div className="col-md-11">
              {auth.admin && (
                <Link
                  to="/create-tour"
                  className="btn btn-outline-primary float-right"
                >
                  Add New Tour
                </Link>
              )}
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">
            {tours.map((tour, idx) => (
              <TourCard tour={tour} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowTourList;
