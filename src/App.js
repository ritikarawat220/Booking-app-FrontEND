import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar/SideBar';
import Home from './components/pages/Home/Home';
import ReservePLane from './components/pages/reserve/ReservePLane';
import ProductDescription from './components/pages/Home/ProductDescription';
import Shop from './components/pages/shop/Shop';
import NotFound from './components/pages/404/NotFound';
import Login from './components/pages/registration/Login';
import Signup from './components/pages/registration/Signup';
import AddAeroplane from './components/pages/Aeroplane/AddAeroplane';
import DeleteAeroplane from './components/pages/Aeroplane/DeleteAeroplane';

function App() {
  return (
    <BrowserRouter>
      <section className="d-flex">
        <div className="col-auto">
          <SideBar />
        </div>
        <div className="mainSection">
          <Routes>
            <Route path="/aeroplanes/:id" element={<ProductDescription />} />

            <Route exact path="/" element={<Home />} />
            <Route path="/reserve" element={<ReservePLane />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aeroplanes/create" element={<AddAeroplane />} />
            <Route path="/deleteaeroplane" element={<DeleteAeroplane />} />
            <Route path="/reserve" element={<ReservePLane />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/test-drive"
              element={<h1>This is the TEST DRIVE page</h1>}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;
