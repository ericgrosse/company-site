import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'components/Home/Home'
import About from 'components/About'
import Portfolio from 'components/Portfolio/Portfolio'
import Naska from 'components/Portfolio/Naska'
import Troy from 'components/Portfolio/Troy'
import Will from 'components/Portfolio/Will'
import Caroline from 'components/Portfolio/Caroline'
import Contact from 'components/Contact'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/portfolio/naska' component={Naska}/>
      <Route path='/portfolio/troy' component={Troy}/>
      <Route path='/portfolio/will' component={Will}/>
      <Route path='/portfolio/caroline' component={Caroline}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
);

export default Routes
