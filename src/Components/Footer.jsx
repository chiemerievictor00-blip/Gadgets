import React from 'react'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="footer-container">


      <div className="footer-contents">

        <div>
          <h3>GADGETS MASTER</h3>
          <p>Your Ultimate destination for cutting-edge gadgets! and electronics. Quality, Speed, Relaibility and Trust.</p>
        </div>
 
        <div className="footer-box">
          <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>About</li>
              <li>Contact</li>
              <li>Deals</li>
              {/* <li>Account</li> */}
              {/* <li>Cart</li> */}
            </ul>
        </div>


        <div className="footer-box">
          <h4>Customer Care</h4>
          <ul>
            <li>Support</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Privacy</li>
            <li>Terms & Conditions</li>
            {/* <li>FAQ</li> */}
            {/* <li>Warranty</li>
            <li>Contact</li>
            <li>Feedback</li>
            <li>Sitemap</li> */}
          </ul>
        </div>

        <div className="footer-box">
          <h4>Shop</h4>
          <ul>
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>Audio</li>
            <li>Gaming</li>
            <li>All Categories</li>
          </ul>
        </div>
      </div>

      <div className="all-rights">
        <p>&copy; {new Date().getFullYear()} Gadgets Master. All rights reserved.</p>
      </div>

      <div className="socials">
        <span><FaFacebook /></span>
        <span><FaXTwitter /></span>
        <span><IoLogoGithub /></span>
        <span><FaInstagram /></span>

      </div>
      
    </div>
      
    </>
  )
}

export default Footer
