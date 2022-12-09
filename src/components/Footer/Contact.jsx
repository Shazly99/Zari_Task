import React from 'react'
import Img from '../../assets/Img'
import icons from '../../constants/Icons'


function Contact() {
    return (
        <>
            <h3 className='app__footer-nav app__footer-sm'>Contact us</h3>
            <ul  className='app__footer-sm'>
                <li><div className="icon"><icons.call  size={15} color='#012C57'/></div>   +966 92 002 4403</li>
                <li> <div className="icon"><icons.Whatsapp  size={15} color='#25D366'/></div>  +966 56 677 0235</li>
                <li><div className="icon"><icons.globe  size={15} color='#012C57'/></div> <a target={'_blank'} href="https://zariapps.com/">https://zariapps.com/</a></li>
                <li><div className="icon"><icons.Envelope  size={15} color='#012C57'/></div> Sales@aznetsul.com</li>
            </ul>
        </>
    )
}

export default Contact