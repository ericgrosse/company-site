import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import Banner from 'components/Common/Banner'
import 'components/About.scss'

class About extends Component {
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

  render() {
    const {props} = this

    return (
      <div className="About">
        <Banner
          title={'About Us'}
          imagePath={require('images/background-1.png')}
        />

        <section>
          <div className="grid-container">
            <div className="subsection header">
              <h3>TODO</h3>
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
              <h3>TODO</h3>
            </div>

            <div className="subsection photo">
              <img className="grid-image effect-right" src={'http://via.placeholder.com/1080x720'}/>
            </div>

            <div className="subsection content">
              <p>Suspendisse a est vitae tortor pretium pulvinar. Cras ullamcorper elit enim, vel auctor libero vestibulum fermentum. Praesent a arcu ut nisi tempus tempor. Aliquam et euismod nulla. Praesent euismod condimentum nulla, eu sagittis nisl interdum vitae. Suspendisse libero felis, tempor sit amet tempus sit amet, tincidunt sit amet risus. Nam accumsan blandit molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante libero, scelerisque vitae diam sit amet, pellentesque luctus quam. Aenean in sapien et neque iaculis laoreet. Donec efficitur aliquet sem non imperdiet. Aliquam non egestas orci. Nulla varius rutrum ex in fringilla. Praesent pharetra ullamcorper quam, in ornare erat. Fusce eget laoreet dolor. Aliquam convallis dapibus nisl, ac sodales mauris accumsan eget.</p>
            </div>
          </div>
        </section>
      </div>      
    )
  }
}

export default About
