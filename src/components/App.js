import React, { Component } from 'react'
import Header from 'components/Header/Header'
import Footer from 'components/Footer'
import MobileHeader from 'components/Header/MobileHeader'
import Routes from 'components/Routes'
import windowDimensions from 'react-window-dimensions';
import 'styles/app.scss'
import 'animate.css/animate.min.css'

class App extends Component {
  render() {
    const {props} = this;

    return (
      <div>
        {/*
          props.width >= 768 ?
          <Header/> :
          <MobileHeader/>
        */}

        <Routes/>
        <Footer/>
      </div>
    )
  }
}

export default windowDimensions()(App)
