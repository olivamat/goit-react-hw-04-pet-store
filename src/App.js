import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Loadable from 'react-loadable';
import Nav from './Pages/Nav';

const AsyncHome = Loadable({
  loader: () => import('./Pages/Home' /* webpackChunkName: "home-page" */),
  loading() {
    return <div>Loading ...</div>;
  },
});

const AsyncAbout = Loadable({
  loader: () => import('./Pages/About' /* webpackChunkName: "About-page" */),
  loading() {
    return <div>Loading ...</div>;
  },
});

const AsyncPets = Loadable({
  loader: () => import('./Pages/Pets' /* webpackChunkName: "Pets-page" */),
  loading() {
    return <div>Loading ...</div>;
  },
});

const AsyncPet = Loadable({
  loader: () => import('./Pages/Pet' /* webpackChunkName: "Pet-page" */),
  loading() {
    return <div>Loading ...</div>;
  },
});

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact component={AsyncHome} />
        <Route path="/about" component={AsyncAbout} />
        <Route path="/pets/:petsId" component={AsyncPet} />
        <Route path="/pets" component={AsyncPets} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
