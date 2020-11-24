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
          <Route path='/About'><About /></Route>
          <Route component={Home} path="/"/>
          <Route component={NewGallery}  path="/NewGallery"/>
          <Route path='/ShowRoom' component={ShowRoom}/>
          <Route component={PageNotFound}/>
        </Switch>
  </BRouter>,
  document.getElementById('main-wrap')
);