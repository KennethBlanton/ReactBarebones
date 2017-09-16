import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import ImageCollection from './ImageCollection';
import ImageDetail from './ImageDetail';
import CategorySelect from './CategorySelect';


const ImageCollectionWrapper = (images) => (
  <ImageCollection images={images} />
);

class App extends Component {

  render() {

    return (
      <BrowserRouter>

      <div className="App">
       
        <Header />
       
        <Sidebar />

        <div className="App-Main">
            <Switch>
              <Route path="/" exact component={ImageCollection} />
              <Route path="/imageDetail/:id" component={ ImageDetail } />
              <Route path="/:name" component={ CategorySelect } />
            </Switch>
        </div>

      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
