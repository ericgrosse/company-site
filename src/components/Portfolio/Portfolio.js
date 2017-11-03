import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from 'components/Common/Banner'
import 'components/Portfolio/Portfolio.scss'

const Portfolio = () => (
  <div className="Portfolio">
    <Banner
      imagePath={require('images/background-4.png')}
      title='Portfolio'
    />
  </div>
)

export default Portfolio
