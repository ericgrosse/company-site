import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'components/Home/Home'
import About from 'components/About'
import Portfolio from 'components/Portfolio'
import Contact from 'components/Contact'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
);

export default Routes
