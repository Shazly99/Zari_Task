import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import data from './data';
import Img from '../../assets/Img';


import './features.scss'
function Features() { 
  return (
    <>
      <div className="app__features" id='Features'>
        <div className="container p-0">
          <Row className='app__features-row-sm  d-flex justify-content-center   '>

            <div className='col-md-3 col-lg-4    app__features-row-sm  '>
              <div className="app__features-img ">
                <h3 className='app__features-h1'>Features</h3>
                <img src={Img.Features} className='w-100' />
              </div>
            </div>

            <div className='col-md-8   app__features-row-sm '>
            

              <Row className="app__features-content    m-auto">
                {
                  data.map((item, index) => (
                    <div className='col-md-6     ' key={index}>
                      <div className='app__features-content_card   '>
                        <img src={item.icon}  className='app__features-content_card-img '/>
                        <span className='app__features-content-dec'>{item.dec}</span>
                      </div>
                    </div>
                  ))
                }
              </Row>
            
            </div>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Features