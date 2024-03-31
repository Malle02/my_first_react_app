import React, { useState, useEffect }  from 'react';
import Home from '../image/plugin/home-131979013044125652.png'
import Veille from '../image/plugin/check+o+icon-1320167992083999221.png'
import BTS from '../image/plugin/student+study+icon-1320196277883460903.png'
import contact from '../image/plugin/contact+mail+48px-131985190031819287.png'
import { NavLink } from 'react-router-dom';

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
           
                <li    className='navbar_item '>
                    <a href="/" className="navbar_link slideIndown-1">Home</a>

                </li>
                <li  className='navbar_item '>
                    <a href="/bts_sio" className="navbar_link slideIndown-2">BTS SIO</a>

                </li>
                <li  className='navbar_item '>
                    <a href="/#projet" onClick={handleScrollToProjet} className="navbar_link slideIndown-3">Projet</a>

                </li>
                <li  className='navbar_item '>
                    <a href="/veilstecno" className="navbar_link slideIndown-4">Veille Techno</a>

                </li>
                
                <li  className='navbar_item '>
                    <a href="/contact" className="navbar_link slideIndown-4">Contact</a>

                </li>

               
               
            </ul>
            <button className="nav_burger" onClick={handleShowLinks}>
                <span className='burger_bar'></span>
            </button>
          
        </nav>
        // <div className='navigation'>



        //     <ul className='menu-container'>
        //         <NavLink to='/'>
        //         <li  className='menuu menu-item'>
        //         Home
        //         </li>
        //         </NavLink>
              

        //         <NavLink to='/bts_sio'>
        //         <li  className='menuu menu-item'>
        //         BTS SIO
                        
        //         </li>
        //         </NavLink>

        //              <NavLink to='' onClick={handleScrollToProjet}>
        //         <li  className='menuu menu-item'>
        //                 projet                       
        //          </li>
        //         </NavLink>

        //         <NavLink to='/contact'>
        //         <li  className='menuu menu-item'>
        //         Contact
                        
        //         </li>
        //         </NavLink>
               
               
        //     </ul>
          
        // </div>
    );
};


export default Navigation;