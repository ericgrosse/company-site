import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Banner from 'components/Common/Banner'
import onScroll from 'helpers/onScroll'
//import Header from 'components/Header'
import 'components/Services.scss'

class Services extends Component {
  componentDidMount() {
    onScroll()
  }

  render() {
    const {props} = this

    return (
      <div className="Services">
        {/*<Header route={props.location.pathname}/>*/}
        
        <Banner
          title={'Services'}
          imagePath={require('images/background-4.png')}
        />

        <section>
          <div className="grid-container">
            <div className="subsection header">
              <h3>Logo Creation</h3>
            </div>

            <div className="subsection photo">
              <img className="grid-image effect-left" src={'http://via.placeholder.com/1080x720'}/>
            </div>

            <div className="subsection content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada urna vitae nisl maximus, eu efficitur libero venenatis. Nulla consequat tellus eros, non volutpat dolor porttitor vel. Aliquam mattis nibh eget orci eleifend consequat. Etiam ut pharetra est. Cras tempus id mi sit amet venenatis. Suspendisse in mollis metus. Cras sagittis, purus in finibus tristique, felis leo tincidunt metus, vitae fermentum dolor mi vel nibh. Nam interdum arcu eget porta pretium. Integer interdum odio non ante dapibus, ac cursus dolor hendrerit. Fusce dignissim vehicula hendrerit. Sed facilisis elit ipsum, quis egestas neque tempus ac. Maecenas vel euismod purus, sit amet egestas odio. Quisque consectetur auctor odio nec accumsan. Quisque faucibus a magna non facilisis.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="grid-container">
            <div className="subsection header">
              <h3>Websites</h3>
            </div>

            <div className="subsection photo">
              <img className="grid-image effect-right" src={'http://via.placeholder.com/1080x720'}/>
            </div>

            <div className="subsection content">
              <p>Suspendisse a est vitae tortor pretium pulvinar. Cras ullamcorper elit enim, vel auctor libero vestibulum fermentum. Praesent a arcu ut nisi tempus tempor. Aliquam et euismod nulla. Praesent euismod condimentum nulla, eu sagittis nisl interdum vitae. Suspendisse libero felis, tempor sit amet tempus sit amet, tincidunt sit amet risus. Nam accumsan blandit molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante libero, scelerisque vitae diam sit amet, pellentesque luctus quam. Aenean in sapien et neque iaculis laoreet. Donec efficitur aliquet sem non imperdiet. Aliquam non egestas orci. Nulla varius rutrum ex in fringilla. Praesent pharetra ullamcorper quam, in ornare erat. Fusce eget laoreet dolor. Aliquam convallis dapibus nisl, ac sodales mauris accumsan eget.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="grid-container">
            <div className="subsection header">
              <h3>Web Apps</h3>
            </div>

            <div className="subsection photo">
              <img className="grid-image effect-left" src={'http://via.placeholder.com/1080x720'}/>
            </div>

            <div className="subsection content">
              <p>Suspendisse a est vitae tortor pretium pulvinar. Cras ullamcorper elit enim, vel auctor libero vestibulum fermentum. Praesent a arcu ut nisi tempus tempor. Aliquam et euismod nulla. Praesent euismod condimentum nulla, eu sagittis nisl interdum vitae. Suspendisse libero felis, tempor sit amet tempus sit amet, tincidunt sit amet risus. Nam accumsan blandit molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante libero, scelerisque vitae diam sit amet, pellentesque luctus quam. Aenean in sapien et neque iaculis laoreet. Donec efficitur aliquet sem non imperdiet. Aliquam non egestas orci. Nulla varius rutrum ex in fringilla. Praesent pharetra ullamcorper quam, in ornare erat. Fusce eget laoreet dolor. Aliquam convallis dapibus nisl, ac sodales mauris accumsan eget.</p>
            </div>
          </div>
        </section>

        <section className="our-expertise">
          <div className="grid-container">
            <div className="subsection header">
              <h3>Our Expertise</h3>
            </div>
             
            <div className="subsection image-container">
              <img src={require('images/react-logo-1000x1000.png')}/>
            </div>
            
            <div className="subsection image-container">
              <img src={require('images/webpack-logo-800x925.png')}/>
            </div>
            
            <div className="subsection image-container">
              <img src={require('images/node-js-logo-1000x612.png')}/>
            </div>

            <div className="subsection image-container">
              <img src={require('images/html5+css3.png')}/>
            </div>

            <div className="subsection image-container">
              <img src={require('images/mysql-logo-1024x530.png')}/>
            </div>

            <div className="subsection image-container">
              <img src={require('images/mongodb-logo-375x375.png')}/>
            </div>

            <div className="subsection image-container">
              <img src={require('images/github-icon-512x512-2.png')}/>
            </div>

            <div className="subsection image-container">
              <img src={require('images/circle-ci-logo-400x400.png')}/>
            </div>

            <div className="subsection image-container">
              <img src={require('images/photoshop-logo-512x512.png')}/>
            </div>
          </div>
        </section>
      </div>      
    )
  }
}

export default Services
