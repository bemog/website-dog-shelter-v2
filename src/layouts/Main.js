import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Main.scss';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AdoptionPage from '../pages/AdoptionPage';
import VolunteeringPage from '../pages/VolunteeringPage';
import ContactPage from '../pages/ContactPage';
import ErrorPage from '../pages/ErrorPage';


const Main = () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/about' component={AboutPage} />
      <Route path='/adoption' component={AdoptionPage} />
      <Route path='/volunteering' component={VolunteeringPage} />
      <Route path='/contact' component={ContactPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default Main;