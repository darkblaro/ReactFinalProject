import React from 'react';
import './styles/index.css'
import Header from './Header'
import Footer from './Footer'

function Home(){
    return(
        <>
        <Header />
        <div className='content'>
            <main>
                <div id="getElements"></div>
            </main>
            <Footer/>
        </div>
        </>
    );
}
export default Home;