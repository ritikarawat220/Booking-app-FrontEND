import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAeroplane, selectAirplanes } from '../../../store/aeroplane/aeroplane';

const DeleteAeroplane = () => {
  const dispatch = useDispatch();
  const airplanes = useSelector(selectAirplanes);

  const handleDeleteAeroplane = (aeroplaneId) => {
    dispatch(deleteAeroplane(aeroplaneId));
  };

  return (
    <div>
      <h2>Delete Aeroplane</h2>
      <ul>
        {airplanes.map((plane) => (
          <li key={plane.id}>
            {plane.name}
            {' '}
            -
            {plane.description}
            {' '}
            - $
            {plane.price}
            <input
              type="button"
              placeholder="Delete"
              onClick={() => handleDeleteAeroplane(plane.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteAeroplane;
