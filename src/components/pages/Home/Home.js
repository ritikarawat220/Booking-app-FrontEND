import React, { useEffect } from 'react';
/* eslint-disable */ 
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAirplanes } from '../../../store/aeroplaneList/aeroplaneListSlice';
import { storeSelectedAirplane } from '../../../store/aeroplaneList/selectedAirplaneSlice';
/* eslint-disable camelcase */
const Airplane = ({
  model, description, image, id, name, price, booking_price,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    // Store the selected airplane in Redux when clicked
    dispatch(storeSelectedAirplane({
      model, description, image, id, name, price, booking_price,
    }));
    navigate(`/aeroplanes/${id}`);
  };

  // Add keyboard event handler for accessibility
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div
      className="vespa_container"
      onClick={handleClick}
      onKeyPress={handleKeyPress} // Add keyboard event handler
      tabIndex={0}
      role="button"
    >
      <div className="vespa-circle">
        <img className="vespas" src={image} alt="" />
      </div>
      <h3 className="vespa-model">{model.toUpperCase()}</h3>
      <p className="vespa-description">{description}</p>
      <button type="button" onClick={handleClick} onKeyPress={handleKeyPress}>
        View Details
      </button>
      {' '}
      {/* Specify type="button" */}
    </div>
  );
};

Airplane.propTypes = {
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  booking_price: PropTypes.number.isRequired,
};

const Home = () => {
  const dispatch = useDispatch();
  const airplanes = useSelector((state) => state.aeroplaneslist.airplanes);
  const status = useSelector((state) => state.aeroplaneslist.status);

  useEffect(() => {
    dispatch(fetchAirplanes());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'failed') {
    return <div>Error: Unable to fetch airplanes</div>;
  }

  return (
    <section className="homepage">
      <div className="hero">
        <h1 className="hero_header">LATEST MODELS</h1>
        <p className="hero_text">Please select a Model</p>
        <div className="vehicle-container">
          {airplanes.map((element) => (
            <div key={element.id}>
              <Airplane
                model={element.model}
                description={element.description}
                image={element.image}
                id={element.id}
                name={element.name}
                price={element.price}
                booking_price={element.booking_price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
