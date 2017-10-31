import React, { Component } from 'react'
import Header from 'components/Header/Header'
import MobileHeader from 'components/Header/MobileHeader'
import Routes from 'components/Routes'
import windowSize from 'react-window-size'
import 'styles/app.scss'
import 'animate.css/animate.min.css'

class App extends Component {
  render() {
    const {props} = this;

    return (
      <div>
        {
          props.windowWidth >= 768 ?
          <Header /> :
          <MobileHeader />
        }
        <Routes />
      </div>
    )
  }
}

export default windowSize(App)
