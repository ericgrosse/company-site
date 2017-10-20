import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/About.scss'

const About = () => (
  <div className="About">
    <div className="wrapper">
      <div className="section one">
        <div className="subsection photo">
          <img src={'http://via.placeholder.com/350x150'}/>
        </div>

        <div className="subsection content">
          Content
        </div>
      </div>

      <div className="section two">
        <div className="subsection photo">
          <img src={'http://via.placeholder.com/350x150'}/>
        </div>

        <div className="subsection content">
          Content
        </div>
      </div>
      
      <div className="section three">
        <div className="subsection photo">
          <img src={'http://via.placeholder.com/350x150'}/>
        </div>

        <div className="subsection content">
          Content
        </div>
      </div>
      
      <div className="section four">
        <div className="subsection photo">
          <img src={'http://via.placeholder.com/350x150'}/>
        </div>

        <div className="subsection content">
          Content
        </div>
      </div>
      
      <div className="section five">
        <div className="subsection photo">
          <img src={'http://via.placeholder.com/350x150'}/>
        </div>

        <div className="subsection content">
          Content
        </div>
      </div>
    </div>
  </div>
)

export default About
