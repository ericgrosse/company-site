import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from 'components/Common/Banner'
import onScroll from 'helpers/onScroll'
import 'components/Contact.scss'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      firstNameError: false,
      lastName: '',
      organization: '',
      city: '',
      telephone: '',
      telephoneError: false,
      emailAddress: '',
      emailAddressError: false,
      projectDetails: '',
      projectDetailsHeight: 96,
    }
  }

  componentDidMount() {
    onScroll()
  }

  render() {
    const {state, props} = this

    return (
      <div className="Contact">
        <Banner
          imagePath={require('images/background-2.png')}
          title={'Contact'}
        />

        <section className="request-quote">
          <div className="grid-container">
            <div className="subsection left">
              <h3>Request A Quote</h3>
              <p>Request a quote and we will respond as soon as possible with a customized quote tailored to your specific project needs.</p>
            </div>

            <div className="subsection right">
              <input
                className={'first-name' + (state.firstNameError ? ' error' : '')}
                type="text"
                placeholder={'First Name*'}
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
                className={'telephone' + (state.telephoneError ? ' error' : '')}
                type="text"
                placeholder={'Telephone*'}
                name={'telephone'}
                value={state.telephone}
                onChange={this.handleChange}
              />

              <input
                className={'email-address' + (state.emailAddressError ? ' error' : '')}
                type="text"
                placeholder={'Email Address*'}
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

              <button className="submit-request" onClick={this.submit}>Submit Request</button>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default Contact
