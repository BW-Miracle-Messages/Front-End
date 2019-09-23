import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HeaderNav from './Components/HeaderNav/HeaderNav';
import VolunteerLogin from './Components/VolunteerLogin/VolunteerLogin';
import VolunteerAddCase from './Components/VolunteerAddCase/VolunteerAddCase'
import HomeScreenCases from './Components/HomeScreenCases/HomeScreenCases'
import FamilyAddCase from './Components/FamilyAddCase/FamilyAddCase';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import FooterNav from './Components/FooterNav/FooterNav';

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Route path='/' component={HomeScreenCases} />
      <Route path='/login' component={VolunteerLogin} />
      <Route path='/family-add-case' component={FamilyAddCase} />
      <ProtectedRoute exact path='/protected' component={VolunteerAddCase} />
      <FooterNav />
    </div>
  );
}

export default App;

