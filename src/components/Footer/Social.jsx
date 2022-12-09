import React from 'react'
import Img from '../../assets/Img'
import icons from '../../constants/Icons'
function Social() {
    return (
        <>
            <img src={Img.logoFooter}   alt="" srcset="" />
            <div className="app__footer-icons">
                <div className="icon">
                    <icons.facebook size={25} color='#23599C' />
                </div>

                <div className="icon">
                    <icons.Twitter size={25} color=' #1DA1F2' />

                </div>
                <div className="icon">
                    <icons.instagram size={25} color='#fff' style={{ borderRadius: '5px', background: ' linear-gradient(45deg, #FFD521 14.64%, #FFD020 18.54%, #FEC01E 23.42%, #FCA71B 28.82%, #FA8316 34.59%, #F85510 40.67%, #F51E09 46.91%, #F30005 50%, #F20007 50.25%, #E1003B 56.83%, #D30067 63.29%, #C70088 69.49%, #BF00A0 75.38%, #BB00AF 80.81%, #B900B4 85.36%)' }} />

                </div>
                <div className="icon">
                    <icons.Linkedin size={25} color=' #007BB5' />

                </div>
            </div>
        </>
    )
}

export default Social