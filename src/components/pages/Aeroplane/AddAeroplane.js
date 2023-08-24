import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAeroplane } from '../../../store/aeroplane/aeroplane';

const AddAeroplane = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [bookingprice, setBookingprice] = useState('');
  const [image, setImage] = useState('');

  const handleAddAeroplane = () => {
    dispatch(addAeroplane({ name, description, price }));
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
        <input type="text" placeholder="<Model" value={model} onChange={(e) => setModel(e.target.value)} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="number" placeholder="Booking-Price" value={bookingprice} onChange={(e) => setBookingprice(e.target.value)} />
        <input type="text" placeholder="Image Address" value={image} onChange={(e) => setImage(e.target.value)} />
        {/* <button type="submit">Add</button> */}
      </form>
    </div>
  );
};

export default AddAeroplane;
