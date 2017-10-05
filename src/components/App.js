import React, { Component } from 'react'
import Header from 'components/Header'
import Routes from 'components/Routes'
import 'components/app.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    )
  }
}
