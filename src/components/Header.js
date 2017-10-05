import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Header.scss'

const Header = () => (
  <div className="Header">
    <div className="header about-button">
      <Link to='/about'>
        About
      </Link>
    </div>

    <div className="header services-button">
      <Link to='/services'>
        Services
      </Link>
    </div>

    <div className="header portfolio-button">
      <Link to='/portfolio'>
        Portfolio
      </Link>
    </div>

    <div className="header quote-request-button">
      <Link to='/quote-request'>
        Quote Request
      </Link>
    </div>

    <div className="header contact-button">
      <Link to='/contact'>
        Contact
      </Link>
    </div>
  </div>
)

export default Header
