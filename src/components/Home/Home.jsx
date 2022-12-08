import React from 'react'
import { Button } from 'react-bootstrap'
import Icons from '../../constants/Icons'
import './home.scss'

function Home() {
  return (
    <>
      <div className="app__home">
        <h1 className='app__home-h1'>Rest assured of the workflow</h1>
        <p className='app__home-p'>Zari Falcon is the most important app in the world of sales<br/>
          Therefore, we are interested in developing the feature of designing itineraries because of its utmost importance in raising the sales efficiency in the company.</p>
        <div className="app__home-btn">
          <button className='app__home-btn-get'> <Icons.download fontSize={20}/> Get App</button>
          <button className='app__home-btn-watch'>  <Icons.play  fontSize={20}/> Watch Video</button>
        </div>
      </div>
    </>
  )
}

export default Home