import React from "react";
import "../App.css";

import axios from "axios";
import { useRecoilValue } from "recoil";

import { authAtom } from "../state";

const TourCard = (props) => {
  const auth = useRecoilValue(authAtom);
  const tour = props.tour;

  const bookTour = () => {
    console.log("here");
    console.log(auth._id);
    console.log(tour._id);
    axios.post(`http://localhost:8082/api/booking/${auth._id}`, {
      tour_id: tour._id,
    });
  };

  const img =
    tour.city === "Sochi"
      ? "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/42/da/24/img-20160208-124713-largejpg.jpg?w=1100&h=-1&s=1"
      : tour.city === "Saratov"
      ? "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/fa/f5/f2/caption.jpg?w=1200&h=-1&s=1"
      : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/90/c0/85/photo2jpg.jpg?w=1200&h=-1&s=1";

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={img}
        className="card-img-top"
        style={{ height: "200px" }}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">
          {tour.title} {tour.author ? `by ${tour.author}` : ""}
        </h5>
        <p className="card-text">{tour.description}</p>
        <button onClick={bookTour} className="btn btn-primary">
          Book this tour
        </button>
      </div>
    </div>
  );
};

export default TourCard;
