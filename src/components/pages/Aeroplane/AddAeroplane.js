import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAeroplane } from '../../../store/aeroplane/aeroplane';
/* eslint-disable */ 
const AddAeroplane = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [booking_price, setBookingprice] = useState('');
  const [image, setImage] = useState('');

  const handleAddAeroplane = (e) => {
    e.preventDefault();
    dispatch(addAeroplane({
      name, description, price, model, booking_price, image,
    }));
    setName('');
    setDescription('');
    setModel('');
    setPrice('');
    setBookingprice('');
    setImage('');
  };

  return (
    <div className="aeroplaneCont">
      <h2 className="aerohead">Add Aeroplane</h2>
      <form className="form" onSubmit={handleAddAeroplane}>
        <input className="aeroinput" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br /><br />
        <input className="aeroinput" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br /><br />
        <input className="aeroinput" type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} />
        <br /><br />
        <input className="aeroinput" type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <br /><br />
        <input className="aeroinput" type="number" placeholder="Booking-Price" value={booking_price} onChange={(e) => setBookingprice(e.target.value)} />
        <br /><br />
        <input className="aeroinput" type="text" placeholder="Image Address" value={image} onChange={(e) => setImage(e.target.value)} />
        <br /><br />
        <button className="loginbtn" type="submit" placeholder="Submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAeroplane;
