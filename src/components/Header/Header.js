import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Header/Header.scss'

const Header = () => (
  <div className="Header">
    <div className="grid-container">
      <section className="logo">
        <Link to='/'>
          <img className="animated lightSpeedIn" src={require('images/logo-icon-1.png')}/>
        </Link>
      </section>

      <section className="portfolio">
        <Link to='/portfolio'>Portfolio</Link>

        {/*<div className="subsection">
          <Link to='/portfolio/naska'>Naska</Link>
          <Link to='/portfolio/troy'>Troy</Link>
          <Link to='/portfolio/will'>Wilbert</Link>
          <Link to='/portfolio/caroline'>Caroline</Link>
        </div>*/}
      </section>

      <section className="about">
        <Link to='/about'>About</Link>
      </section>

      <section className="contact">
        <Link to='/contact'>Contact</Link>
      </section>
    </div>
  </div>
)

export default Header
