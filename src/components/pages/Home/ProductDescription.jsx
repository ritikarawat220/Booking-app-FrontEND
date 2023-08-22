import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDescription } from '../../../store/productDescription/productDescriptionSlice';

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
      <div className="heading text-center">
        <h3>
          Product Details
          {' '}
          {id}

        </h3>
      </div>

      {productDescription.map((element) => (

        <div key={element.id} className=" container-md display-flex justify-content-center">
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
}
