import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "../pages/Home";

import "../pages/Bts_sio";
import "../pages/Contact";
import './navigation.css';



const Navigation = () => {

    const handleScrollToProjet = () => {
        const projetElement = document.getElementById('projet');
        if (projetElement) {
            projetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(function() {
            window.location.href = '/#projet';
        }, 100);
   
    };

    const [showLinks, setShowLinks] = useState(false)
    
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    
        
    return (
       
        
        <nav className={`navbar ${showLinks ?"show-nav" : "hid-nave"}`}>

       

            <ul className='navbar_links'>
           
                <li className='navbar_item '>
                    <Link to="/"> <a className="navbar_link slideIndown-1">Home</a></Link>

                </li>
                <li className='navbar_item '>
                   <Link  to="/bts_sio"> <a   className="navbar_link slideIndown-2">BTS SIO</a></Link>

                </li>
                <li className='navbar_item '>
                   <Link to="/#projet">  <a  onClick={handleScrollToProjet} className="navbar_link slideIndown-3">Projet</a> </Link>

                </li>
                <li className='navbar_item '>
                <Link  to="/contact " >  <a href="/contact" className="navbar_link slideIndown-4">Contact</a></Link>

                </li>

               
               
            </ul>
            <button className="nav_burger" onClick={handleShowLinks}>
                <span className='burger_bar'></span>
            </button>
          
        </nav>
       
    );
};


export default Navigation;