import React, { Component } from 'react'
import Header from 'components/Header/Header'
import MobileHeader from 'components/Header/MobileHeader'
import Routes from 'components/Routes'
import windowSize from 'react-window-size'
import 'styles/app.scss'

class App extends Component {
  render() {
    const {props} = this;

    return (
      <div>
        {
          true ?
          <Header /> :
          <MobileHeader />
        }
        <Routes />
      </div>
    )
  }
}

export default windowSize(App)
