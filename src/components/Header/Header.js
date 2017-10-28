import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Header/Header.scss'

const Header = () => (
  <div className="Header">
    <div className="grid">
      <div className="gutter"/>

      <div className="portfolio-container">
        <Link className="header portfolio-button" to='/portfolio'>Portfolio</Link>

        <div className="portfolio-subsection">
          <Link className="header portfolio-button" to='/portfolio'>Naska</Link>
          <Link className="header portfolio-button" to='/portfolio'>Troy</Link>
        </div>
      </div>

      <div className="about-container">
        <Link className="header about-button" to='/about'>About</Link>
      </div>

      <div className="quote-request-container">
        <Link className="header quote-request-button" to='/contact'>Contact</Link>
      </div>

      <div className="gutter"/>
    </div>


  </div>
)

export default Header
