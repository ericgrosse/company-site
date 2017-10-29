import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Home/Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      organization: '',
      city: '',
      telephone: '',
      ext: '',
      emailAddress: '',
      projectDetails: '',
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {state} = this;

    return (
      <div className="Home">
        <div className="wrapper">
          <div className="section banner">
            <video autoPlay loop id="video-background" muted plays-inline>
              <source
                src={require('videos/2.mp4')}
                type="video/mp4"
              />
            </video>
          </div>

          <div className="section our-services">
            <div className="subsection left">
              <h3>Our Services</h3>
              <p>We offer web development services for projects of any scale</p>
              <Link to="/services">What we offer</Link>
            </div>

            <div className="subsection right">
              <img src={require('images/naska/1.jpg')}/>
            </div>
          </div>
          
          <div className="section our-portfolio">
            <div className="subsection left">
              <h3>Our Portfolio</h3>
              <p>We build responsive websites with fluid layouts and elegant animations</p>
              <Link to="/portfolio">What we've done</Link>
              <img src={require('images/naska/2.jpg')}/>
            </div>

            <div className="subsection right">
              <h3>About Us</h3>
              <p>We are a small team of dedicated web developers and concept artists</p>
              <Link to="/about">What we're about</Link>
              <img src={require('images/naska/3.jpg')}/>
            </div>
          </div>

          <div className="section our-expertise">
            <div className="subsection subsection-1">
              <h3>Our Expertise</h3>
            </div>
            
            <div className="subsection subsection-2">
              <img src={require('images/react-logo-1000x1000.png')}/>
            </div>
            
            <div className="subsection subsection-3">
              <img src={require('images/webpack-logo-800x925.png')}/>
            </div>
            
            <div className="subsection subsection-4">
              <img src={require('images/node-js-logo-1000x612.png')}/>
            </div>

            <div className="subsection subsection-5">
              <img src={require('images/html5+css3.png')}/>
            </div>

            <div className="subsection subsection-6">
              <img src={require('images/mysql-logo-1024x530.png')}/>
            </div>

            <div className="subsection subsection-7">
              <img src={require('images/mongodb-logo-375x375.png')}/>
            </div>

            <div className="subsection subsection-8">
              <img src={require('images/github-icon-512x512-2.png')}/>
            </div>

            <div className="subsection subsection-9">
              <img src={require('images/circle-ci-logo-400x400.png')}/>
            </div>

            <div className="subsection subsection-10">
              <img src={require('images/photoshop-logo-512x512.png')}/>
            </div>
          </div>
          
          <div className="section our-office">
            <div className="subsection subsection-1">
              <h3>Our Office</h3>
              <p>Montreal</p>
              <p>153 ave de la Pointe-Claire</p>
              <p>Pointe-Claire, Quebec</p>
              <p>Canada H9S 4M7</p>
              <p>Tel: 514-951-5198</p>
            </div>
          </div>

          <div className="section request-quote">
            <div className="subsection subsection-1">
              <h3>Request A Quote</h3>
              <p>Request a quote and we will respond as soon as possible with a customized quote tailored to your specific project needs.</p>
            </div>

            <div className="subsection subsection-2">
              <input
                className="first-name"
                type="text"
                placeholder={'First Name'}
                name={'firstName'}
                value={state.firstName}
                onChange={this.handleChange}
              />

              <input
                className="last-name"
                type="text"
                placeholder={'Last Name'}
                name={'lastName'}
                value={state.lastName}
                onChange={this.handleChange}
              />

              <input
                className="organization"
                type="text"
                placeholder={'Organization'}
                name={'organization'}
                value={state.organization}
                onChange={this.handleChange}
              />

              <input
                className="city"
                type="text"
                placeholder={'City'}
                name={'city'}
                value={state.city}
                onChange={this.handleChange}
              />

              <input
                className="telephone"
                type="text"
                placeholder={'Telephone'}
                name={'telephone'}
                value={state.telephone}
                onChange={this.handleChange}
              />
            
              <input
                className="extension"
                type="text"
                placeholder={'Ext.'}
                name={'ext'}
                value={state.ext}
                onChange={this.handleChange}
              />

              <input
                className="email-address"
                type="text"
                placeholder={'Email Address'}
                name={'emailAddress'}
                value={state.emailAddress}
                onChange={this.handleChange}
              />

              <input
                className="project-details"
                type="text"
                placeholder={'Project details'}
                name={'projectDetails'}
                value={state.projectDetails}
                onChange={this.handleChange}
              />

              <button className="submit-request">Submit Request</button>
            </div>
          </div>

          <div className="section footer">
            <div className="subsection subsection-1">
              <h3>“ Everyone takes the limits of his own vision for the limits of the world. ”</h3>
              <p>— Arthur Schopenhauer</p>
            </div>
              
            <div className="subsection subsection-2">
              <p className="copyright">© 2017 Singularity Software. All rights reserved.</p>

              <div className="social-media-icons">
                <i className="fa fa-github" aria-hidden="true"/>
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                <i className="fa fa-twitter-square" aria-hidden="true"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
