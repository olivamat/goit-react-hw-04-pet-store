import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import PetsPage from './Pages/Pets';
import PetPage from './Pages/Pet';
import Nav from './Pages/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/pets/:petsId" component={PetPage} />
        <Route path="/pets" component={PetsPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
