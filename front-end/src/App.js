import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HeaderNav from './Components/HeaderNav/HeaderNav';
import VolunteerLogin from './Components/VolunteerLogin/VolunteerLogin';
import VolunteerSignUp from './Components/VolunteerSignUp/VolunteerSignup';
import VolunteerAddCase from './Components/VolunteerAddCase/VolunteerAddCase'
import HomeScreenCases from './Components/HomeScreenCases/HomeScreenCases'
import FamilyAddCase from './Components/FamilyAddCase/FamilyAddCase';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import FooterNav from './Components/FooterNav/FooterNav';
import VolunteerEditandDelete from './Components/VoluneteerEditandDelete/VolunteerEditandDelete'

function App() {
  const [caseData, setCaseData] = useState([])
  // make axios get request and set res.data to caseData

  return (
    <div className="App">
      <HeaderNav />
      <Route path='/' component={HomeScreenCases} />
      <Route path='/login' component={VolunteerLogin} />
      <Route path='/signup' component={VolunteerSignUp} />
      <Route path='/family-add-case' component={FamilyAddCase} setCaseData={setCaseData}/>
      <ProtectedRoute exact path='/volunteer-add-case' component={VolunteerAddCase} setCaseData={setCaseData}/>
      <ProtectedRoute exact path='/volunteer-edit-delete-case' component={VolunteerEditandDelete} />
      <FooterNav />
    </div>
  );
}

export default App;

