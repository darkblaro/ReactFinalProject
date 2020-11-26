import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as BRouter, Route,Switch} from 'react-router-dom'
import Home from './Home'
import About from './About'
import NewGallery from './NewGallery'
import ShowRoom from './ShowRoom'
import PageNotFound from './PageNotFound';


ReactDOM.render(
  <BRouter>
        <Switch>
          <Route component={About} path="/About"/>
          <Route component={Home} exact path="/"/>
          <Route component={NewGallery}  path="/NewGallery"/>
          <Route component={ShowRoom} path="/ShowRoom"/>
          <Route component={PageNotFound}/>
        </Switch>
  </BRouter>,
  document.getElementById('main-wrap')
);