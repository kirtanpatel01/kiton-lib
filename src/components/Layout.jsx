import React from 'react'
import { Sidebar } from '../components';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
        <Sidebar />
        <Outlet />
    </>
  )
}

export default Layout