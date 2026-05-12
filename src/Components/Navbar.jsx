import React from 'react'
import '../Styles/Navbar.css'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { RiAccountCircleFill } from "react-icons/ri";


function Navbar() {
  
    const [Scrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;  
            if (offset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }   
        };

        window.addEventListener('scroll', handleScroll);    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);





  return (
    <>
{/* 
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
   {menuOpen ? <FiX /> : <FiMenu />}
   </div> */}
    <nav className={Scrolled ? 'navbar scrolled' : 'navbar'}>

        <h1 className='logo'>Gadgets Master</h1>
        

        <div className="navlinks">
            <ul>
                <li><NavLink to = "/">Home</NavLink></li>
                <li><NavLink to = "/About">About</NavLink></li>
                <li><NavLink to = "/Products">Products</NavLink></li>
                <li><NavLink to = "/Deals">Deals</NavLink></li>
                <li><NavLink to = "/Contact">Contact</NavLink></li>
                <li><RiAccountCircleFill className='navacct' /></li>
                <li><FiShoppingCart className='navcart' /></li>
            </ul>

            {/* <div className="hamburger"onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
             */}
        </div>
        
    </nav>
      
    </>
  )
}

export default Navbar


