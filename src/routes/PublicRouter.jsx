import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const PublicRouter = ({ log, redirectPath = '/' }) => {
    if (log.log) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return <Outlet />;
  };

export default PublicRouter