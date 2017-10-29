import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Header/Header.scss'

const Header = () => (
  <div className="Header">
    <div className="grid-container">
      <section className="logo">
        <Link to='/'>
          <img className="animated lightSpeedIn" src={'http://via.placeholder.com/100x50'}/>
        </Link>
      </section>

      <section className="portfolio">
        <Link to='/portfolio'>Portfolio</Link>

        <div className="subsection">
          <Link to='/portfolio'>Naska</Link>
          <Link to='/portfolio'>Troy</Link>
        </div>
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
