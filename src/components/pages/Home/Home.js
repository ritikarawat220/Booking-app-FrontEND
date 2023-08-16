import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import img from '../../../assets/img.jpg';

const Airplane = ({ model, description }) => (
  <>
    <div className="vespa_container">
      <div className="vespa-circle">
        <img className="vespas" src={img} alt="" />
      </div>
      <h3 className="vespa-model">{model.toUpperCase()}</h3>
      <p className="vespa-description">{description}</p>
    </div>
  </>
);

Airplane.propTypes = {
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Home = () => (
  <section className="homepage">
    <div className="hero">
      <h1 className="hero_header">LATEST MODELS</h1>
      <p className="hero_text">Please select a Vespa Model</p>
      <div className="vehicle-container">
        {[1, 2, 3].map((i) => (
          <Airplane key={i} model="Vespa C20" description="The Vespa C20 is such a unique model that it has been known for longevity." />
        ))}
      </div>
    </div>
  </section>
);

export default Home;
