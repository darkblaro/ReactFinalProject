import React from 'react';
import './styles/index.css'
import Header from './Header';

export default function About(){
    return (
        <>
            <Header />
            <div className='content'>
                <main>
                    <section>
                        <h1>About me</h1>
                        <p>Hi! This is my final project for ComIT ReactJS course.</p>
                        <p>You can also find me on:
                            <div className="contacts">
                                <ul>
                                    <li><a href="https://darkblaro.github.io/" target="_blank" rel="noreferrer">My Portfolio</a></li>
                                    <li><a href="https://www.linkedin.com/in/roman-blagovestny-68673b14a/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                                    <li><a href="https://www.facebook.com/darkint" target="_blank" rel="noreferrer">Facebook</a></li>
                                    <li><a href="https://github.com/darkblaro" target="_blank" rel="noreferrer">Github</a></li>
                                </ul>
                            </div>
                        </p>
                    </section>
                </main>
            </div>
        </>
    );
}