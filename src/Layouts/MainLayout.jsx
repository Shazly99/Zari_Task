import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Component from '../constants/Component'

function MainLayout() {
  return (
    <>
    <Component.NavBar/>
    <Component.Home/>
    <Component.Features/>
    <Component.OurApp/>
    <Component.Plans/>
    <Footer/>
    {/* <Outlet></Outlet> */}
    </>
  )
}

export default MainLayout