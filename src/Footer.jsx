import React from 'react';
import './styles/Footer.css'
import {NavLink} from 'react-router-dom'

export default function Footer(){
    return (
        <footer>
            <div id="foot">
                <ul>
                    <li><NavLink to="About">About</NavLink></li>
                </ul>
            </div>
        </footer>
    );
}