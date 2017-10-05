import React, { Component } from 'react'
import Header from 'components/Header'
import Main from 'components/Main'
import 'components/app.scss'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}
