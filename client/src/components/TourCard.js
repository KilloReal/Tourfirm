import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const TourCard = (props) => {
    const  tour  = props.tour;

    return(
        <div className="card-container">
            <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-tour/${tour._id}`}>
                        { tour.title }
                    </Link>
                </h2>
                <h3>{tour.author}</h3>
                <p>{tour.description}</p>
            </div>
        </div>
    )
};

export default TourCard;