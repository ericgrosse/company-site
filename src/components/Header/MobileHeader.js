import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Header/MobileHeader.scss'

class MobileHeader extends Component {
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

  render () {
    const {state, props} = this

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
}

export default MobileHeader
