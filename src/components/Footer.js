import React, { Component } from 'react'
import './Footer.scss'

export default class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="grid-container">              
          <div className="subsection">
            <p className="copyright">© 2017 Web Singularity. All rights reserved.</p>

            <div className="social-media-icons">
              <a href={'https://github.com/ericgrosse'}><i className="fa fa-github" aria-hidden="true"/></a>
              <a href={'https://www.linkedin.com/in/eric-grosse-485a0894/'}><i className="fa fa-linkedin-square" aria-hidden="true"/></a>
              <a href={'https://twitter.com/eric_grosse'}><i className="fa fa-twitter-square" aria-hidden="true"/></a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
