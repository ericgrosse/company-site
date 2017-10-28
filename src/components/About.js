import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'components/About.scss'

const About = () => (
  <div className="About">
    <div className="wrapper">
      <div className="section one">
        <div className="subsection photo">
          <img src={require('images/about/eric-1.JPG')}/>
        </div>

        <div className="subsection content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada urna vitae nisl maximus, eu efficitur libero venenatis. Nulla consequat tellus eros, non volutpat dolor porttitor vel. Aliquam mattis nibh eget orci eleifend consequat. Etiam ut pharetra est. Cras tempus id mi sit amet venenatis. Suspendisse in mollis metus. Cras sagittis, purus in finibus tristique, felis leo tincidunt metus, vitae fermentum dolor mi vel nibh. Nam interdum arcu eget porta pretium. Integer interdum odio non ante dapibus, ac cursus dolor hendrerit. Fusce dignissim vehicula hendrerit. Sed facilisis elit ipsum, quis egestas neque tempus ac. Maecenas vel euismod purus, sit amet egestas odio. Quisque consectetur auctor odio nec accumsan. Quisque faucibus a magna non facilisis.
        </div>
      </div>

      <div className="section two">
        <div className="subsection photo">
          <img src={require('images/about/diizon-1.jpg')}/>
        </div>

        <div className="subsection content">
          Suspendisse a est vitae tortor pretium pulvinar. Cras ullamcorper elit enim, vel auctor libero vestibulum fermentum. Praesent a arcu ut nisi tempus tempor. Aliquam et euismod nulla. Praesent euismod condimentum nulla, eu sagittis nisl interdum vitae. Suspendisse libero felis, tempor sit amet tempus sit amet, tincidunt sit amet risus. Nam accumsan blandit molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante libero, scelerisque vitae diam sit amet, pellentesque luctus quam. Aenean in sapien et neque iaculis laoreet. Donec efficitur aliquet sem non imperdiet. Aliquam non egestas orci. Nulla varius rutrum ex in fringilla. Praesent pharetra ullamcorper quam, in ornare erat. Fusce eget laoreet dolor. Aliquam convallis dapibus nisl, ac sodales mauris accumsan eget.
        </div>
      </div>
    </div>
  </div>
)

export default About
