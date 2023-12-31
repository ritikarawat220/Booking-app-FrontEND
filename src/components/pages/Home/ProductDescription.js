import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './ProductDescription.css';

const ProductDescription = () => {
  const { id } = useParams();
  const selectedAirplane = useSelector((state) => state.selectedAirplane);

  return (
    <div className="detail-container">
      <div className="details-image-container">
        <img src={selectedAirplane.image} alt={selectedAirplane.image} />
      </div>
      <div className="details-content-container">
        <h3>{selectedAirplane.name}</h3>

        <ul className="vehicle-info-details">
          <li>
            <p>Name:</p>
            <p className="vehicle-info-data">{selectedAirplane.name}</p>
          </li>
          <li>
            <p>Model:</p>
            <p className="vehicle-info-data">{selectedAirplane.model}</p>
          </li>
          <li>
            <p>Price:</p>
            <p className="vehicle-info-data">{selectedAirplane.price}</p>
          </li>
          <li>
            <p>Booking Price:</p>
            <p className="vehicle-info-data">{selectedAirplane.booking_price}</p>
          </li>
          <li>
            <Link to={`/aeroplanes/${id}/reserve`} className="reserve-vehicle">
              <p>Reserve</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDescription;
