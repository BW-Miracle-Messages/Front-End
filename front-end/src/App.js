import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

import HeaderNav from './Components/HeaderNav/HeaderNav';
import VolunteerLogin from './Components/VolunteerLogin/VolunteerLogin';
import VolunteerSignUp from './Components/VolunteerSignUp/VolunteerSignup';
import VolunteerAddCase from './Components/VolunteerAddCase/VolunteerAddCase'
import HomeScreenCases from './Components/HomeScreenCases/HomeScreenCases'
import FamilyAddCase from './Components/FamilyAddCase/FamilyAddCase';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import FooterNav from './Components/FooterNav/FooterNav';
import VolunteerEditandDelete from './Components/VoluneteerEditandDelete/VolunteerEditandDelete'
import FamilyAddData from './Components/FamilyAddData./FamilyAddData'

function App() {
  const [caseData, setCaseData] = useState([])
  // make axios get request and set res.data to caseData

  useEffect(() => {
    axios
    .get('https://miracle-messages2019.herokuapp.com/api/cases')
    .then(res => {
      console.log(res.data)
      setCaseData(res.data)
    })
  }, [])

  return (
    <div className="App">
      <HeaderNav />
      <Switch>
      <Route exact path='/' component={HomeScreenCases} />
      <Route path='/login' component={VolunteerLogin} />
      <Route path='/signup' component={VolunteerSignUp} />
      <Route path='/family-add-case' component={FamilyAddCase} setCaseData={setCaseData}/>
      <Route path='/:id/family-add-data' component={FamilyAddData} />
     
      <ProtectedRoute exact path='/volunteer-add-case' 
      component={VolunteerAddCase} 
      setCaseData={setCaseData} 
      caseData={caseData}
      />
      
      <ProtectedRoute 
      // <Route 
      exact path='/volunteer-edit-delete-case/:id'
      render={props => {
        return <VolunteerEditandDelete 
        {...props} 
        setCaseData={setCaseData} 
        caseData={caseData}/>
      }} 
      component={VolunteerEditandDelete} 
      />
  </Switch>
      <FooterNav />
    </div>
  );
}

export default App;

