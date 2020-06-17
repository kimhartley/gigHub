import React from 'react'
import {connect} from 'react-redux'
import {loginError, registerUserRequest} from '../actions/auth'

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
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
    let {username, password, confirm_password, name, email} = this.state
    if (confirm_password != password) return this.props.dispatch(loginError("Passwords don't match"))
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(registerUserRequest({username, password, name, email}, confirmSuccess))
  }

  render() {
  
    const {auth} = this.props
  
    return (
  
      <form className="card" onSubmit={this.submit}>
        
        <h1>Register</h1>
        
        {auth.errorMessage && <span>{auth.errorMessage}</span>}
        <label>Username
          <input required style= {{
            margin: "10px"
          }} placeholder="User Name" type="text" name="username" autoComplete="username" onChange={this.updateDetails} value={this.state.username}/>
        </label>
        
        <div>
          <label>Name
            <input required style= {{
            margin: "10px"
          }} placeholder="Name" type="text" name="name" onChange={this.updateDetails} value={this.state.name}/>
          </label>

          <label>Email
            <input required style= {{
            margin: "10px"
          }} placeholder="Email" type="text" name="email" onChange={this.updateDetails} value={this.state.email}/>
          </label>
        </div>
        
        <div>
          <label>Password
            <input required style= {{
            margin: "10px"
          }} placeholder="Password" type="password" name="password"  autoComplete="new-password" onChange={this.updateDetails} value={this.state.password}/>
          </label>

          <label>Confirm Password
            <input required style= {{
            margin: "10px"
          }} placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={this.updateDetails} value={this.state.confirm_password}/>
          </label>
        </div>

        <input style= {{
            margin: "10px"
          }} value="Register" type="submit" />
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)