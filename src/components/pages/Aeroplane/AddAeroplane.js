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
    <div>
      <h2>Add Aeroplane</h2>
      <form onSubmit={handleAddAeroplane}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="number" placeholder="Booking-Price" value={booking_price} onChange={(e) => setBookingprice(e.target.value)} />
        <input type="text" placeholder="Image Address" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit" placeholder="Submit">Submit</button>
      </form>
    </div>
  );
};

export default AddAeroplane;
