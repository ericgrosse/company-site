import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Home/Home.scss'
import $ from 'jquery'

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
      projectDetailsHeight: 96,
    }
  }

  componentDidMount() {
    /* Animate image when scrolling to it */

    let $animatedIcons = $('.grid-image'); // Add classnames here
    let $window = $(window);
    let lastScrollTop = 0;

    function checkIfInView() {
      let windowHeight = $window.height();
      let windowTopPosition = $window.scrollTop();
      let windowBottomPosition = windowTopPosition + windowHeight;

      $.each($animatedIcons, function() {
        let $element = $(this);
        let elementHeight = $element.outerHeight();
        let elementTopPosition = $element.offset().top;
        let elementBottomPosition = elementTopPosition + elementHeight;

        // check to see if this current container is within viewport
        if( /*(elementBottomPosition >= windowTopPosition) &&*/ (elementTopPosition <= windowBottomPosition) ) {
          $element.addClass('animated');

          if ($element.hasClass('effect-left')) {
            $element.addClass('fadeInLeft');
          }
          else {
            $element.addClass('fadeInRight');
          }
        }
        else {
          $element.removeClass('animated');

          if ($element.hasClass('effect-left')) {
            $element.removeClass('fadeInLeft');
          }
          else {
            $element.removeClass('fadeInRight');
          }
        }
      });

      lastScrollTop = windowTopPosition;
    }

    $window.on('scroll', checkIfInView);
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  increaseHeight = () => {
    this.setState({projectDetailsHeight: 192})
  }

  decreaseHeight = () => {
    this.setState({projectDetailsHeight: 96})
  }

  render() {
    const {state} = this;

    return (
      <div className="Home">
        <section className="banner">
          <div className="grid-container">
            <video autoPlay loop id="video-background" muted plays-inline>
              <source
                src={require('videos/2.mp4')}
                type="video/mp4"
              />
            </video>

            <img src={'http://via.placeholder.com/480x180'}/>
          </div>
        </section>
          
        <section className="our-portfolio">
          <div className="grid-container">
            <div className="subsection left">
              <h3>Our Portfolio</h3>
              <p>We build responsive websites with fluid layouts and elegant animations</p>
              <Link to="/portfolio">What we've done</Link>
              <img className="grid-image" src={'http://via.placeholder.com/1080x720'}/>
            </div>

            <div className="subsection right">
              <h3>About Us</h3>
              <p>We are a small team of dedicated web developers and concept artists</p>
              <Link to="/about">What we're about</Link>
              <img className="grid-image" src={'http://via.placeholder.com/1080x720'}/>
            </div>
          </div>
        </section>
          
        <section className="our-office">
          <div className="grid-container">
            <div className="subsection left">
              <h3>Our Office</h3>
              <p>Montreal</p>
              <p>153 ave de la Pointe-Claire</p>
              <p>Pointe-Claire, Quebec</p>
              <p>Canada H9S 4M7</p>
              <p>Tel: 514-951-5198</p>
            </div>

            <div className="subsection right">
              <img className="grid-image effect-left" src={'http://via.placeholder.com/1080x720'}/>
            </div>
          </div>
        </section>

        <section className="request-quote">
          <div className="grid-container">
            <div className="subsection left">
              <h3>Request A Quote</h3>
              <p>Request a quote and we will respond as soon as possible with a customized quote tailored to your specific project needs.</p>
            </div>

            <div className="subsection right">
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

              <textarea
                className="project-details"
                style={{height: state.projectDetailsHeight}}
                placeholder={'Project details'}
                name={'projectDetails'}
                value={state.projectDetails}
                onChange={this.handleChange}
                onClick={this.increaseHeight}
                onBlur={this.decreaseHeight}
              />

              <button className="submit-request">Submit Request</button>
            </div>
          </div>
        </section>

        <section className="footer">
          <div className="grid-container">              
            <div className="subsection">
              <p className="copyright">© 2017 Web Singularity. All rights reserved.</p>

              <div className="social-media-icons">
                <i className="fa fa-github" aria-hidden="true"/>
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                <i className="fa fa-twitter-square" aria-hidden="true"/>
              </div>
            </div>
          </div>
        </section>

          {/*<div className="section our-services">
            <div className="subsection left">
              <h3>Our Services</h3>
              <p>We offer web development services for projects of any scale</p>
              <Link to="/services">What we offer</Link>
            </div>

            <div className="subsection right">
              <img src={require('images/naska/1.jpg')}/>
            </div>
          </div>*/}

          {/*<div className="section our-expertise">
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
          </div>*/}

          {/*<div className="subsection subsection-1">
            <h3>“ Everyone takes the limits of his own vision for the limits of the world. ”</h3>
            <p>— Arthur Schopenhauer</p>
          </div>*/}
      </div>
    );
  }
}

export default Home
