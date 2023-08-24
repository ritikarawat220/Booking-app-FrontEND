import React from 'react';
import {
  BrowserRouter, Route, Routes, Outlet,
} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Home from './components/pages/Home/Home';
import ReservePLane from './components/pages/reserve/ReservePLane';
import Shop from './components/pages/shop/Shop';
import NotFound from './components/pages/404/NotFound';
import Login from './components/pages/registration/Login';
import Signup from './components/pages/registration/Signup';
import AddAeroplane from './components/pages/Aeroplane/AddAeroplane';
import DeleteAeroplane from './components/pages/Aeroplane/DeleteAeroplane';
import MainComponent from './components/pages/Aeroplane/Aeroplanes';
import Protected from './components/Protected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected />}>
          <Route
            path="/"
            element={<Layout showSidebar><Outlet /></Layout>}
          >
            <Route index element={<Home />} />
            <Route path="aeroplanes" element={<MainComponent />} />
            <Route path="/reserve" element={<ReservePLane />} />
            <Route path="aeroplanes/create" element={<AddAeroplane />} />
            <Route path="deleteaeroplane" element={<DeleteAeroplane />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/test-drive" element={<h1>This is the TEST DRIVE page</h1>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route
          path="/login"
          element={<Layout showSidebar={false}><Login /></Layout>}
        />
        <Route
          path="/signup"
          element={<Layout showSidebar={false}><Signup /></Layout>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
