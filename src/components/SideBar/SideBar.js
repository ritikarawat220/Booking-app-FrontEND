import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faBookmark,
  faCartFlatbed,
  faHouseUser,
  faPlaneUp,
  faRightFromBracket,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Twitter from './assets/x-twitter.svg';
import Facebook from './assets/facebook-f.svg';
import LinkedIn from './assets/linkedin-in.svg';
import Medium from './assets/medium.svg';
import './SideBar.css';

const SideBar = () => (
  <>
    <section className="d-flex flex-column justify-content-between vh-100 SideNav">
      <div>
        <a href="/" className="homeNav">
          <FontAwesomeIcon icon={faHouseUser} className="homeIcon" />
        </a>
        <hr className="hrLine" />
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              <FontAwesomeIcon icon={faPlaneUp} className="navIcon" />
              <span className="navText">AIRPLANES</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/reserve" className="nav-link">
              <FontAwesomeIcon icon={faBookmark} className="navIcon" />
              <span className="navText">RESERVE AIRPLANE</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/shop" className="nav-link">
              <FontAwesomeIcon icon={faCartFlatbed} className="navIcon" />
              <span className="navText">MY RESERVATIONS</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/test-drive" className="nav-link">
              <FontAwesomeIcon icon={faTrash} className="navIcon" />
              <span className="navText">DELETE AIRPLANE</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <div className="imgIcons">
          <img src={Twitter} alt="Twitter" />
          <img src={Facebook} alt="Facebook" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Medium} alt="Medium" />
        </div>
        <hr className="hrLine" />
        <div className="userBottom">
          <FontAwesomeIcon icon={faUser} className="userIcon" />
          <span className="fs-4 userName">John Doe</span>
          <FontAwesomeIcon icon={faRightFromBracket} className="userLogout" />
        </div>
      </div>
    </section>
  </>
);

export default SideBar;
