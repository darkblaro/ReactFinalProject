import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as BRouter, Route} from 'react-router-dom'
import Home from './Home'
import Header from './Header';
import Footer from './Footer'
import About from './About'
import NewGallery from './NewGallery'
//onclick={right}import ShowRoom from './ShowRoom'



ReactDOM.render(
  <BRouter>
    <Header />
    <div className="content">
      <main>
        <Route path='/About'><About /></Route>
        <Route component={Home} exact path="/"/>
        <Route component={NewGallery} exact path="/NewGallery"/>
        {/* <Route path='/ShowRoom'><ShowRoom/></Route> */}
      <Home/>
      </main>
      <Footer />
    </div>
  </BRouter>,
  document.getElementById('main-wrap')
);