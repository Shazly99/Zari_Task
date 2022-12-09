import React from 'react'
import './ourapp.scss'
import { Col, Container, Row } from 'react-bootstrap';
import Icons from '../../constants/Icons'
import Img from '../../assets/Img';

function OurApp() {
  return (
    <>
      <div className="app__OurApp container-fluid mt-5" id='ourapp'>
        <Container>

        <div className='app__OurApp-main'>
          <div className='app__OurApp-left'>
            <h1 className='app__OurApp-h1'>Our App</h1>
            <p className='app__OurApp-p'>A new application to facilitate the follow-up of the external work team of shipping representatives or external sales personnel, and to measure the production capacity of the individual and the working hours.<br />
              Zari Falcon enables you to view everything that happens with your employee outside the company during working hours through its various services.</p>
    
            <div className="app__OurApp-btn">
              <button className='app__home-btn-get'> <Icons.Ios fontSize={20} /> Available on the App Store</button>
              <button className='app__home-btn-watch'>  <Icons.google fontSize={20} /> Get on the Google Play</button>
            </div>
          </div>

          <div className='app__OurApp-right d-flex justify-content-center align-items-center mt-5'> 
          <img src={Img.Ourapp} className='app__OurApp-img'  />
          </div>
        </div>
        </Container>
      </div>

    </>
  )
}

export default OurApp