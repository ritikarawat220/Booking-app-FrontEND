import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../../store/reservations/reservationSlice';
import './MyReservations.css';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const isLoading = useSelector((state) => state.reservations.isLoading);
  const error = useSelector((state) => state.reservations.error);

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="reservationSection">
      <h1>My Reservations</h1>
      <ul>
        {reservations.map((reservation) => (
          <div key={reservation.id} className="reservation">
            <span className="cityName">
              City:
              {' '}
              <span>{reservation.city}</span>
            </span>
            <span>
              Reservation Date:
              {' '}
              <span>{reservation.reservation_date}</span>
            </span>
            <span>
              Returning Date:
              {' '}
              <span>{reservation.returning_date}</span>
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MyReservations;
