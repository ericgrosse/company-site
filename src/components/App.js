import React, { Component } from 'react'
import Header from 'components/Header/Header'
import Routes from 'components/Routes'
import windowSize from 'react-window-size'
import 'components/app.scss'

class App extends Component {
  render() {
    const {props} = this;

    return (
      <div>
        {
          props.windowWidth >= 1000 && <Header />
        }
        <Routes />
      </div>
    )
  }
}

export default windowSize(App)
