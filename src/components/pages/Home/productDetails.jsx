import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../../store/productDetails/productDetailsSlice';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { productDetails, isLoading } = useSelector((store) => store.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails());
  }, [dispatch]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <div className="heading text-center">
        <h3>
          Product Details
          {' '}
          {id}
        </h3>
      </div>

      {productDetails.map((element) => (
        <div key={element.id} className="container-md display-flex justify-content-center">
          <div className="display-flex justify-content-center">
            <img src={element.image} alt={element.name} />
          </div>
          <div className="container-airp-details">
            <li>
              <div>Brand Name</div>
              <div>{element.name}</div>
            </li>
            <li />
            <li>
              <div>Description</div>
              <div>{element.description}</div>
            </li>
            <li>
              <div>Model</div>
              <div>{element.model}</div>
            </li>
            <li>
              <div>Price</div>
              <div>{element.price}</div>
            </li>
            <li>
              <div>Booking Price</div>
              <div>{element.Booking_Price}</div>
            </li>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductDetails;
