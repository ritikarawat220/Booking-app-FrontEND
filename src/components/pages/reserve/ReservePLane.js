import { useState } from 'react';
import './ReservePlane.css';

const ReservePLane = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [returndate, setReturndate] = useState('');

  return (
    <>
      <section className="reservattionSection">
        <h2 className="reservationH">Reserve Aeroplane</h2>
        <p className="reservationP">
          Please fill the form to reserve your Aeroplane
        </p>
        <form className="formContainer">
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
            City:
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="date" className="labelText">
            Rervation Date:
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
            <select id="aeroplane">
              <option>Select Aeroplane</option>
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
