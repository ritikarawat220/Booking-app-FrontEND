import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { postReservation } from '../../../store/reservations/reservationSlice';
import './ReservePlane.css';

const ReservePLane = () => {
  const navigate = useNavigate();
  // const {
  //   reservation: { isLoading },
  // } = useSelector((store) => store.reservations);
  // const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  const [returndate, setReturndate] = useState('');
  const [selectedAeroplaneId, setSelectedAeroplaneId] = useState('');

  const [error, setError] = useState('');

  const cities = [
    'New York',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
  ];

  const handleReservation = async (event) => {
    event.preventDefault();
    const today = new Date();
    const selectedReservationDate = new Date(reservationDate);
    if (selectedReservationDate < today) {
      setError('Please select a date in the future');
      return;
    }
    const selectedReturnDate = new Date(returndate);
    if (
      selectedReturnDate <= today
      || selectedReturnDate <= selectedReservationDate
    ) {
      setError('Please select a return date after the reservation date');
      return;
    }
    setError('');
    const reservationData = {
      name,
      city,
      reservationDate,
      returnningDate: returndate,
      aeroplaneId: selectedAeroplaneId,
    };
    await dispatch(postReservation(reservationData));
    navigate('/my-reservations');
  };
  return (
    <>
      <section className="reservattionSection">
        <h2 className="reservationH">Reserve Aeroplane</h2>
        <p className="reservationP">
          Please fill the form to reserve your Aeroplane
        </p>
        <form onSubmit={handleReservation} className="formContainer">
          {error && <p className="error">{error}</p>}
          <label htmlFor="name" className="labelText">
            Name:
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
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
            Rervation Date:
            <input
              type="date"
              id="date"
              value={reservationDate}
              onChange={(e) => setReservationDate(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="returndate" className="labelText">
            Return Date:
            <input
              type="date"
              id="returndate"
              value={returndate}
              onChange={(e) => setReturndate(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="aeroplane" className="labelText">
            Aeroplane:
            <select
              id="aeroplane"
              value={selectedAeroplaneId}
              onChange={(e) => setSelectedAeroplaneId(e.target.value)}
            >
              <option value="">Select Aeroplane</option>
              <option value="A320">A320</option>
              <option value="A380">A380</option>
            </select>
          </label>
          <br />
          <div className="btnContainer">
            <button type="submit" id="reservationBtn">
              Reserve
            </button>
            <button type="submit" id="checkReservations">
              Check My Reservations
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ReservePLane;
