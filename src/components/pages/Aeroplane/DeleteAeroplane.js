import React from 'react';
import { useDispatch } from 'react-redux';
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
            <button onClick={() => handleDeleteAeroplane(plane.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteAeroplane;
