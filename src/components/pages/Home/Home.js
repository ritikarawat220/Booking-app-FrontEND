import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAirplanes } from '../../../store/aeroplaneList/aeroplaneListSlice';

const Airplane = ({ model, description, image }) => (
  <div className="vespa_container">
    <div className="vespa-circle">
      <img className="vespas" src={image} alt="" />
    </div>
    <h3 className="vespa-model">{model.toUpperCase()}</h3>
    <p className="vespa-description">{description}</p>
  </div>
);

Airplane.propTypes = {
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const airplanes = useSelector((state) => state.aeroplaneslist.airplanes);
  console.log('airplanes in list', airplanes);
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
            <div
              key={element.id}
              onClick={() => navigate(`aeroplanes/${element.id}`)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  navigate(`aeroplanes/${element.id}`);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <Airplane
                model={element.model}
                description={element.description}
                image={element.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
