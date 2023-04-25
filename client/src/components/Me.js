import { useState, useEffect } from "react";
import axios from "axios";

import { useRecoilValue } from "recoil";

import { authAtom } from "../state";

import Navbar from "./Navbar";

function Me() {
  const auth = useRecoilValue(authAtom);

  const [tours, setTours] = useState([]);

  useEffect(() => {
    const load = async () => {
      const bookings = await axios.get(
        `http://localhost:8082/api/booking/${auth._id}`
      );

      const localTours = await Promise.all(
        bookings.data.map((b) =>
          axios.get(`http://localhost:8082/api/tours/${b.tour_id}`)
        )
      );

      setTours(localTours);
    };

    load();
  }, [auth._id]);

  return (
    <>
      <Navbar />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{auth.username}</h5>
        </div>
        <div className="card-header">Booked tours</div>
        <div className="list-group list-group-flush">
          {tours.map((t, idx) => (
            <a
              key={idx}
              href={`/show-tour/${t.data._id}`}
              className="list-group-item"
            >
              {t.data.city} in {t.data.country}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Me;
