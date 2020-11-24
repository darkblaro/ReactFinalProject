import React from 'react';
import LeftArrow from './images/left.svg'
import RightArrow from './images/right.svg'
import './styles/showroom.css'
import {right, left} from './scripts/showroom'
import Image from './images/logo.png'


export default function ShowRoom(){
    return(
        <main className="srmain">
            <div className="show-container">
                <div className="scroll" id="left" onClick={left}>
                    <img src={LeftArrow} alt="left" />
                </div>
                <section>
                    <img src={Image} alt="" id="slider"/>
                </section>
                <div className="scroll" id="right" onClick={right}>
                    <img src={RightArrow} alt="right"/>
                </div>
            </div>
        </main>
    );
}