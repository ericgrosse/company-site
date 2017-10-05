import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Header.scss'

const Header = () => (
  <div className="Header">
    <div className="header about-button">
      <Link to='/about'>
        <div className="inner">About</div>
      </Link>
    </div>

    <div className="header services-button">
      <Link to='/services'>
        <div className="inner">Services</div>
      </Link>
    </div>

    <div className="header portfolio-button">
      <Link to='/portfolio'>
        <div className="inner">Portfolio</div>
      </Link>
    </div>

    <div className="header quote-request-button">
      <Link to='/quote-request'>
        <div className="inner">Quote Request</div>
      </Link>
    </div>

    <div className="header contact-button">
      <Link to='/contact'>
        <div className="inner">Contact</div>
      </Link>
    </div>
  </div>
)

export default Header
