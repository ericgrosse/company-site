import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Header.scss'

const Header = () => (
  <div className="Header">
    <div className="header about-button">
      <div className="inner">
        <Link to='/about'>About</Link>
      </div>
    </div>

    <div className="header services-button">
      <div className="inner">
        <Link to='/services'>Services</Link>
      </div>
    </div>

    <div className="header portfolio-button">
      <div className="inner">
        <Link to='/portfolio'>Portfolio</Link>
      </div>
    </div>

    <div className="header quote-request-button">
      <div className="inner">
        <Link to='/quote-request'>Quote Request</Link>
      </div>
    </div>

    <div className="header contact-button">
      <div className="inner">
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  </div>
)

export default Header
