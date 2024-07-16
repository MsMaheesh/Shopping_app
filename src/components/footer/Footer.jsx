import React from 'react'
import shoplogo from '../../asse/shop-logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
        <img src={shoplogo}></img>
        <div className='footer-menu'>
            <h5>Company</h5>
            <h5>Products</h5>
            <h5>Offices</h5>
            <h5>About</h5>
            <h5>Contact</h5>
        </div>
        <div className='footer-logo'>
            <FaInstagram/>
            <FaWhatsapp/>
        </div>
        <p>Copyright @ 2024 - All Right Reserved</p>
    </div>
  )
}

export default Footer