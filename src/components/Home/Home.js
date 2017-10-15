import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/Home/Home.scss'

const Home = () => (
  <div className="Home">
    <div className="wrapper">
      <div className="banner">
        <div className="sub-1">
          <img src={require('images/software-singularity-logo-1.png')}/>
        </div>
      </div>
      
      <div className="our-services">
        <div className="sub-1">
          <h3>Our Services</h3>
          <i className="fa fa-server" aria-hidden="true"/>
          <p>We offer web development services for projects of any scale</p>
          <button>What we offer</button>
        </div>

        <div className="sub-2">
          <h3>Our Portfolio</h3>
          <i className="fa fa-folder-open" aria-hidden="true"/>
          <p>We build responsive websites with fluid layouts and elegant animations</p>
          <button>What we've done</button>
        </div>

        <div className="sub-3">
          <h3>About Us</h3>
          <i className="fa fa-user-circle" aria-hidden="true"/>
          <p>We are a small team of dedicated web developers and concept artists</p>
          <button>What we're about</button>
        </div>
      </div>
      
      <div className="our-expertise">
        <div className="sub-1">
          <h3>Our Expertise</h3>
        </div>
        
        <div className="sub-2">
          <img src={require('images/react-logo-1000x1000.png')}/>
        </div>
        
        <div className="sub-3">
          <img src={require('images/webpack-logo-800x925.png')}/>
        </div>
        
        <div className="sub-4">
          <img src={require('images/node-js-logo-1000x612.png')}/>
        </div>

        <div className="sub-5">
          <img src={require('images/html5+css3.png')}/>
        </div>

        <div className="sub-6">
          <img src={require('images/mysql-logo-1024x530.png')}/>
        </div>

        <div className="sub-7">
          <img src={require('images/mongodb-logo-375x375.png')}/>
        </div>

        <div className="sub-8">
          <img src={require('images/github-icon-512x512-2.png')}/>
        </div>

        <div className="sub-9">
          <img src={require('images/circle-ci-logo-400x400.png')}/>
        </div>

        <div className="sub-10">
          <img src={require('images/photoshop-logo-512x512.png')}/>
        </div>
      </div>
      
      <div className="our-office">
        <div className="sub-1">
          <h3>Our Office</h3>
          <h4>Montreal</h4>
          <p>153 ave de la Pointe-Claire</p>
          <p>Pointe-Claire, Quebec</p>
          <p>Canada H9S 4M7</p>
          <p>Tel: 514-951-5198</p>
        </div>
      </div>

      <div className="request-quote">
        <div className="sub-1">
          <h3>Request A Quote</h3>
          <p>Request a quote and we will respond as soon as possible with a customized quote tailored to your specific project needs.</p>
        </div>

        <div className="sub-2">
          TODO1
        </div>
      </div>

      <div className="footer">
        <h3>"Inspirational quote about the singularity"</h3>
        <p>Copyright stuff</p>
        <p>TODO: Social media icons</p>
      </div>
    </div>
  </div>
)

export default Home
