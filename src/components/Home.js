import React, { Component } from 'react'
import './Home.scss'
import img from '../images/tattoo-1.jpg'

const Home = () => (
  <div className="Home">
    <div className="container">
      <div className="item item-1">
        <img src={img}/>
      </div>
      <div className="item item-2">
        <p>Item 2</p>
      </div>
      <div className="item item-3">
        <p>Item 3</p>
      </div>
      <div className="item item-4">
        <p>Item 4</p>
      </div>
      <div className="item item-5">
        <p>Item 5</p>
      </div>
      <div className="item item-6">
        <p>Item 6</p>
      </div>
      <div className="item item-7">
        <p>Item 7</p>
      </div>
      <div className="item item-8">
        <p>Item 8</p>
      </div>
    </div>
  </div>
)

export default Home
