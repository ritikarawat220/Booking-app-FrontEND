import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postReservation } from '../../../store/reservations/reservationSlice';
import './ReservePlane.css';

const ReservePlane = () => {
  const airplanes = useSelector((state) => state.aeroplaneslist.airplanes);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [city, setCity] = useState('');
  const [selectedAeroplaneId, setSelectedAeroplaneId] = useState('');
  const formRef = useRef();

  const cities = [
    'New York',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
  ];

  const handleReservation = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const form = Object.fromEntries(formData);

    const reservationData = {
      id: selectedAeroplaneId,
      reservation: {
        city,
        reservation_date: form.reservation_date,
        returning_date: form.returning_date,
      },
    };
    dispatch(postReservation(reservationData)).then((result) => {
      if (result && result.error) return;
      navigate('/my-reservations');
    });
    event.target.reset();
  };

  return (
    <>
      <section className="reservationSection">
        <h2 className="reservationH">Reserve Aeroplane</h2>
        <p className="reservationP">
          Please fill out the form to reserve your Aeroplane
        </p>
        <form
          onSubmit={handleReservation}
          ref={formRef}
          className="formContainer"
        >
          <label htmlFor="city" className="labelText">
            Select Your City:
            <select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">City of reservation</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label htmlFor="date" className="labelText">
            Reservation Date:
            <input type="date" id="date" name="reservation_date" />
          </label>
          <br />
          <label htmlFor="returnDate" className="labelText">
            Return Date:
            <input type="date" id="returnDate" name="returning_date" />
          </label>
          <br />
          <label htmlFor="aeroplane" className="labelText">
            Aeroplane:
            <select
              id="aeroplane"
              value={selectedAeroplaneId}
              onChange={(e) => setSelectedAeroplaneId(e.target.value)}
            >
              <option defaultValue="Select Aeroplane">Select Aeroplane</option>
              {airplanes.map((airplane) => (
                <option key={airplane.id} value={airplane.id}>
                  {airplane.name}
                </option>
              ))}
            </select>
          </label>
          <br />
          <div className="btnContainer">
            <button type="submit" id="reservationBtn">
              Reserve
            </button>
            {/* You can add functionality to the "Check My Reservations" button */}
            {/* <button onClick={handleCheckReservations} id="checkReservations">
              Check My Reservations
            </button> */}
          </div>
        </form>
      </section>
    </>
  );
};

export default ReservePlane;
