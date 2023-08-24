import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const Protected = () => {
  const token = localStorage.getItem('authToken');
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default Protected;
