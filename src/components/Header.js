import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => (
  <div className="Header">
    <div className="header about-button">
      About
    </div>

    <div className="header services-button">
      Services
    </div>

    <div className="header portfolio-button">
      Portfolio
    </div>

    <div className="header quote-request-button">
      Quote Request
    </div>

    <div className="header contact-button">
      Contact
    </div>
  </div>
)

export default Header
