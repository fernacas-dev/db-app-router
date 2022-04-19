import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import Navbar from '../components/Navbar';

const PrivateRouter = ({ log, redirectPath = '/login' }) => {
    console.log(log)
    if (!log.log) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return (
        <div>
            <Navbar/>
            <Outlet />
        </div>
    );
  };

export default PrivateRouter