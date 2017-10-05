import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => (
  <div className="Header">
    <div className="header about-button">
      <div className="inner">About</div>
    </div>

    <div className="header services-button">
      <div className="inner">Services</div>
    </div>

    <div className="header portfolio-button">
      <div className="inner">Portfolio</div>
    </div>

    <div className="header quote-request-button">
      <div className="inner">Quote Request</div>
    </div>

    <div className="header contact-button">
      <div className="inner">Contact</div>
    </div>
  </div>
)

export default Header
