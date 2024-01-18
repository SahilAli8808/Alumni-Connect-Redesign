import React from 'react'
import Topbar from './Components/Topbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function Layout() {
  return (
    <>
      <Topbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
