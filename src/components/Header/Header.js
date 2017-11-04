import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import windowDimensions from 'react-window-dimensions'
//import 'components/Header/Header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showHeader: false
    }
  }

  // Hide the header on a route change
  componentWillReceiveProps(nextProps) {
    const {props} = this

    if (props !== nextProps) {
      this.setState({showHeader: false})
    }
  }

  toggleHeader = () => {
    this.setState({showHeader: !this.state.showHeader})
  }

  render() {
    const {state, props} = this

    if (props.width < 768) {
      return (
        <div className="MobileHeader">
          <i className="fa fa-bars" onClick={this.toggleHeader}/>

          <div className={'header-content' + (state.showHeader ? ' expanded': '')}>
            <Link className="home" to='/'>Home</Link>
            <Link className="portfolio" to='/portfolio'>Portfolio</Link>
            <Link className="naska" to='/portfolio'>Naska</Link>
            <Link className="troy" to='/portfolio'>Troy</Link>
            <Link className="wilbert" to='/portfolio'>Wilbert</Link>
            <Link className="caroline" to='/portfolio'>Caroline</Link>
            <Link className="about" to='/about'>About</Link>
            <Link className="contact" to='/contact'>Contact</Link>
          </div>
        </div>
      )
    }

    return (
      <div className="Header">
        <div className="grid-container">
          <section className="logo">
            {
              props.route !== '/' &&

              <Link to='/'>
                <img className="animated lightSpeedIn" src={require('images/logo-1.png')}/>
              </Link>
            }
          </section>

          <section className="services">
            <Link to='/services'>Services</Link>
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
  }
}

export default windowDimensions()(Header)
