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
    </div>
  )
}

export default Home
