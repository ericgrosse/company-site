import React, { Component } from 'react'
import 'components/Home/Home.scss'
import Slider from 'react-slick'

const Home = () => {
  const settings = {
    className: 'center',
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500
  }

  return (
    <div className="Home">
      <div className="slider-container">
        <Slider {...settings}>
          <div><img src={require('images/tattoo-1.jpg')}/></div>
          <div><img src={require('images/tattoo-2.jpg')}/></div>
          <div><img src={require('images/tattoo-3.jpg')}/></div>
          <div><img src={require('images/tattoo-4.jpg')}/></div>
          <div><img src={require('images/tattoo-5.jpg')}/></div>
        </Slider>
      </div>

      <div className="grid-container">
        <div className="item item-1">
          <h3>Our Services</h3>
          <img src={require('images/tattoo-1.jpg')}/>
          <p>We offer web development services for projects of any scale</p>
          <button>What we offer</button>
        </div>

        <div className="item item-2">
          <h3>Our Portfolio</h3>
          <img src={require('images/tattoo-2.jpg')}/>
          <p>We build responsive websites with fluid layouts and elegant animations</p>
          <button>What we've done</button>
        </div>

        <div className="item item-3">
          <h3>About Us</h3>
          <img src={require('images/tattoo-3.jpg')}/>
          <p>We are a small team of dedicated web developers and concept artists</p>
          <button>What we're about</button>
        </div>

        <div className="item item-4">
          <h3>Our Expertise</h3>

          <div className="subgrid">
            <div className="sub-1">
              <img src={require('images/react-js-logo.png')}/>
            </div>

            <div className="sub-2">
              <img src={require('images/node-js-logo.png')}/>
            </div>

            <div className="sub-3">
              <img src={require('images/webpack-logo.svg')}/>
            </div>

            <div className="sub-4">
              <img src={require('images/html5-logo.png')}/>
            </div>

            <div className="sub-5">
              <img src={require('images/css3-logo.png')}/>
            </div>
          </div>
        </div>

        <div className="item item-5">
          <h3>Our Office</h3>
          <h4>Montreal</h4>
          <p>153 ave de la Pointe-Claire</p>
          <p>Pointe-Claire, Quebec</p>
          <p>Canada H9S 4M7</p>
          <p>Tel: 514-951-5198</p>
        </div>

        <div className="item item-6">
          <h3>Request A Quote</h3>
          <p>Request a quote and we will respond as soon as possible with a customized quote tailored to your specific project needs.</p>
        </div>

        <div className="item item-7">
          <h3>TODO</h3>
        </div>
      </div>
    </div>
  )
}

export default Home
