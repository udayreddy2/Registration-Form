// Write your JS code here
import {Component} from 'react'
import './index.css'

class Registration extends Component {
  state = {
    firstname: '',
    lastname: '',
    checkFirstName: '',
    checkLastName: '',
    submitted: false,
  }

  onFirstName = event => {
    this.setState({firstname: event.target.value})
  }

  onLastName = event => {
    this.setState({lastname: event.target.value})
  }

  checkingFirstName = event => {
    if (event.target.value === '') {
      this.setState({checkFirstName: true})
    } else {
      this.setState({checkFirstName: false})
    }
  }

  checkingLastName = event => {
    if (event.target.value === '') {
      this.setState({checkLastName: true})
    } else {
      this.setState({checkLastName: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstname, lastname} = this.state
    if (firstname !== '' && lastname !== '') {
      this.setState({
        checkFirstName: false,
        checkLastName: false,
        firstname: '',
        lastname: '',
        submitted: true,
      })
    } else if (firstname === '' && lastname !== '') {
      this.setState({checkFirstName: true, checkLastName: false})
    } else if (firstname !== '' && lastname === '') {
      this.setState({checkFirstName: false, checkLastName: true})
    } else {
      this.setState({checkFirstName: true, checkLastName: true})
    }
  }

  resetForm = () => {
    this.setState({submitted: false})
  }

  render() {
    const {
      firstname,
      lastname,
      checkFirstName,
      checkLastName,
      submitted,
    } = this.state

    console.log('checkFirstName', checkFirstName)
    console.log('checkLastName', checkLastName)

    const firstNameEmpty = checkFirstName ? 'red' : ''
    const lastNameEmpty = checkLastName ? 'red' : ''

    return (
      <div className="main-container">
        <h1 className="heading">Registration</h1>
        {submitted ? (
          <div className="success-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="success-logo"
            />
            <p className="success-msg">Submitted Successfully</p>
            <button type="submit" className="button" onClick={this.resetForm}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label className="label" htmlFor="firstName">
              FIRST NAME
            </label>
            <input
              id="firstName"
              type="text"
              value={firstname}
              placeholder="First Name"
              className={`input ${firstNameEmpty}`}
              onChange={this.onFirstName}
              onBlur={this.checkingFirstName}
            />
            {checkFirstName && <p className="error">*Required</p>}
            <label className="label" htmlFor="lastName">
              LAST NAME
            </label>
            <input
              id="lastName"
              type="text"
              value={lastname}
              placeholder="Last Name"
              className={`input ${lastNameEmpty}`}
              onChange={this.onLastName}
              onBlur={this.checkingLastName}
            />
            {checkLastName && <p className="error">*Required</p>}
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default Registration
