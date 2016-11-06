import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from '../components/app.jsx';
import Home from '../components/home.jsx';
import Add from '../components/add.jsx';
// import AllPhoto from '../components/allPhoto.jsx';
import CreateProfile from '../components/CreateProfile.jsx';
import LogIn from '../components/login.jsx';
import Nav from '../components/nav.jsx';
import Profile from '../components/profile.jsx';
import Register from '../components/register.jsx';
import SinglePhoto from '../components/singlePhoto.jsx';
import requreAuth from '../utils/auth.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="register" component={Register} />
        <Route path="login" component={LogIn} />
        <Route path="add" component={Add} onEnter={requreAuth} />
        <Route path="allphoto" component={AllPhoto} onEnter={requreAuth} />
        <Route path="createprofile" component={CreateProfile} onEnter={requreAuth} />
        <Route path="profile" component={Profile} onEnter={requreAuth} />
        <Route path="singlephoto" component={SinglePhoto} onEnter={requreAuth} />
      </Route>
    </Router>
  )
}
