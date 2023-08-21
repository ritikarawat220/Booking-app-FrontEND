import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetails } from '../../../store/productDetails/productDetailsSlice';

const Airplane = ({ model, description, image }) => (
  <>
    <div className="vespa_container">
      <div className="vespa-circle">
        <img className="vespas" src={image} alt="" />
      </div>
      <h3 className="vespa-model">{model.toUpperCase()}</h3>
      <p className="vespa-description">{description}</p>
    </div>
  </>
);

Airplane.propTypes = {
  model: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Home = () => {
  const { productDetails } = useSelector((store) => store.productDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetails());
  }, [dispatch]);
  const name = localStorage.getItem('name');

  return (
    <section className="homepage">
      <div className="hero">
        <h1 className="hero_header">
          Welcome Back,
          {name}
        </h1>
        <p className="hero_text">Please select a Model</p>
        <div className="vehicle-container">
          {productDetails ? (
            productDetails.map((element) => (
              <Airplane
                key={element.id}
                model={element.model}
                description={element.description}
                image={element.image}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
