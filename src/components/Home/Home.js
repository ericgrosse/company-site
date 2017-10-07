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
        <div className="gutter"/>

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

        <div className="gutter"/>
      </div>
    </div>
  )
}

export default Home