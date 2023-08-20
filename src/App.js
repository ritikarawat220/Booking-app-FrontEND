import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar/SideBar';
import Home from './components/pages/Home/Home';
import Shop from './components/pages/shop/Shop';
import NotFound from './components/pages/404/NotFound';
import Login from './components/pages/registration/Login';

function App() {
  return (
    <BrowserRouter>
      <section className="d-flex">
        <div className="col-auto">
          <SideBar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/lifestyle"
              element={<h1>This is the LIFESTYLE page</h1>}
            />
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
