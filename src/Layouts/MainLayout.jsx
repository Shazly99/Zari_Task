import React from 'react' 
import Footer from '../components/Footer/Footer'
import Component from '../constants/Component'

function MainLayout() {
  return (
    <>
    <Component.NavBar/>
    {/* <Outlet></Outlet> */}
    <Footer/>
    </>
  )
}

export default MainLayout