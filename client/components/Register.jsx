import React from 'react'
import {connect} from 'react-redux'
import {loginError, registerUserRequest} from '../actions/auth'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      confirm_password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(loginError(''))
  }
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  submit(e) {
    e.preventDefault()
    e.target.reset()
    let {name, username, password, confirm_password, email} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(registerUserRequest({name, username, password, email}, confirmSuccess))
  }
  render() {
    const {auth} = this.props
    return (
      <form onSubmit={this.submit}>
        <h1>Register</h1>
        
        {auth.errorMessage && <span>{auth.errorMessage}</span>}
        <div>
          <label>Name
          <input required placeholder="Name" type="text" name="name" autoComplete="name" onChange={this.updateDetails} value={this.state.name} />
          </label>
        </div>
        <div>
          <label>User Name
            <input required placeholder="User Name" type="text" name="username" onChange={this.updateDetails} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>Email Address
            <input required placeholder="Email Address" type="text" name="email" onChange={this.updateDetails} value={this.state.email} />
          </label>
        </div>

        <div >
          <label>Password
            <input required placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={this.updateDetails} value={this.state.password} />
          </label>
          <label>Confirm Password
            <input required placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={this.updateDetails} value={this.state.confirm_password} />
          </label>
        </div>
        <input value="Register" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)