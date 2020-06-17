import React from 'react'
import {connect} from 'react-redux'
import {loginUser, loginError} from '../actions/auth'
import Weekly from './Weekly'

class Login extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.updateDetails = this.updateDetails.bind(this)
    this.submit = this.submit.bind(this)
  }
  
  updateDetails(e) {
    this.setState({[e.target.name]: e.target.value})
  }
  
  submit(e) {
    e.preventDefault()
    let {username, password} = this.state
    const confirmSuccess = () => { this.props.history.push('/') }
    this.props.dispatch(loginUser({username, password}, confirmSuccess))
  }
  
  render() {
    
    const {auth} = this.props
    
    return (
      <form className="card" onSubmit={this.submit}>
        <h1>Login</h1>
        
        {auth.errorMessage && <span>{auth.errorMessage}</span>}
        <label>Username  
            <input required placeholder="User Name" type="text" name="username" autoComplete="username" value={this.state.username} onChange={this.updateDetails}/>
        </label>
        <label>Password  
            <input required placeholder="Password" type="password" name="password" autoComplete="current-password" value={this.state.password} onChange={this.updateDetails}/>
        </label>
            <input value='Login' type="submit" />
            
      </form>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Login)