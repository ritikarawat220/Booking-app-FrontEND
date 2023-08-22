import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TfiArrowCircleRight } from 'react-icons/tfi';
import { fetchProductDescription } from '../../../store/productDescription/productDescriptionSlice';
import './ProductDescription.css';

export default function ProductDescription() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productDescription, isLoading } = useSelector((store) => store.productDescription);

  useEffect(() => {
    dispatch(fetchProductDescription(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      {productDescription.map((element) => (
        <div key={element.id} className="detail-container">
          <div className="details-image-container">
            <img src={element.image} alt={element.name} />
          </div>
          <div className="details-content-container">
            <h3>{element.model}</h3>

            <div className="details-description">
              <p>
                {element.description ? `${element.description.slice(0, 100)}...` : ''}
              </p>
            </div>

            <ul className="vehicle-info-details">
              <li>
                <p>Name:</p>
                {' '}
                <p className="vehicle-info-data">{element.engine}</p>
              </li>
              <li>
                <p>Model:</p>
                {' '}
                <p className="vehicle-info-data">{element.mileage}</p>
              </li>
              <li>
                <p>Price:</p>
                {' '}
                <p className="vehicle-info-data">{element.price}</p>
              </li>
              <div className="reserve-vehicle">
                <p>Reserve</p>
                {' '}
                <TfiArrowCircleRight className="arrow-right-reserve" />
              </div>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
