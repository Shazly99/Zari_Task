import React from 'react'
import './footer.scss';

import { Col, Row } from 'react-bootstrap';
import Component from '../../constants/Component';

function Footer() {
  return (
    <>
      <div className="app__footer   px-3">
        <Row className='app__footer-width d-flex justify-content-between align-items-center'>

          <Col md={2} className='d-flex flex-column justify-content-center align-items-center'>
            <Component.Social/>
          </Col>
          
          <Col md={3} className='d-flex flex-column justify-content-center align-items-start'>
            <h3 className='app__footer-nav'>Navigate</h3>
            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Our app</li>
              <li>Plans</li>
            </ul>
          </Col>

          <Col md={3} className='app__footer-contant d-flex flex-column justify-content-center align-items-start'>
            <Component.Contact/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Footer
