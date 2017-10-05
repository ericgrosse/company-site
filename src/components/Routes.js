import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'components/Home/Home'
import About from 'components/About'
import Services from 'components/Services'
import Portfolio from 'components/Portfolio'
import QuoteRequest from 'components/QuoteRequest'
import Contact from 'components/Contact'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/services' component={Services}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/quote-request' component={QuoteRequest}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
);

export default Routes
