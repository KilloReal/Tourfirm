import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import CreateTour from './components/CreateTour';
import ShowTourList from './components/ShowTourList';
import ShowTourDetails from './components/ShowTourDetails';
import UpdateTourInfo from './components/UpdateTourInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={ShowTourList} />
          <Route path='/create-tour' component={CreateTour} />
          <Route path='/edit-tour/:id' component={UpdateTourInfo} />
          <Route path='/show-tour/:id' component={ShowTourDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;