import React from 'react';
import PropTypes from 'prop-types';
import SideBar from './SideBar/SideBar';

const Layout = ({ children, showSidebar }) => (
  <section className="d-flex">
    {showSidebar && (
    <div className="col-auto">
      <SideBar />
    </div>
    )}
    <div className="mainSection">{children}</div>
  </section>
);

// Define prop types for the component
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showSidebar: PropTypes.bool.isRequired,
};

export default Layout;
