import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const { Products } = useSelector((store) => store.productDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductDetails());
  }, [dispatch]);

  return (
    <section className="homepage">
      <div className="hero">
        <h1 className="hero_header">LATEST MODELS</h1>
        <p className="hero_text">Please select a Model</p>
        <div className="vehicle-container">
          {Products ? (
            Products.map((element) => (
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
                  key={element.id}
                  model={element.model}
                  description={element.description}
                  image={element.image}
                />
              </div>
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
