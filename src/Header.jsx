import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from './images/logo.png'
import './styles/Header.css'

export default function Header(){
    return (
        <header>
            <nav> 
                <NavLink to="/Home"><img src={Logo} alt="logo" className="logo"/></NavLink>
                <div className="menu-wrap">
                    <ul className="menu">
                        <li><NavLink to="/NewGallery">Create new Gallery</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}