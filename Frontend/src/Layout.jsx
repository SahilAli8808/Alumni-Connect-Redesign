import React from 'react'
import Topbar from './Components/Topbar'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import { getLoggedIn } from './services/authService'
import { ToastContainer } from 'react-toastify'

function Layout() {
  const loggedIn = getLoggedIn();
  return (
    <>
      <ToastContainer/>
  
      <Topbar />
      <Outlet />
     

      <Footer />
    </>
  )
}

export default Layout
