import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../actions/auth'

class Nav extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({show: !this.state.show})
  }

  render() {
    
    const { auth, logout } = this.props
    const { show } = this.state

    return <nav className="card">
    <div className="container">
      <div>
        <span onClick={this.toggle} className={`${show ? 'is-active': ''}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div className={`${show ? "is-active" : ''}`}>
        <div>

          { auth.isAuthenticated
            ? (    
              <form className="form-inline">
                <Link onClick={this.toggle} className="nav-link" to='/events'>Events</Link>
                <Link onClick={this.toggle} className="nav-link" to='/venues'>Venues</Link>
                <Link onClick={this.toggle} className="nav-link" to='/weekly'>Weekly</Link>
                <Link to='/' className="nav-link" onClick={() => logout()}>Logout</Link>
              </form>
              )
            : (
              <form className="form-inline">
                <Link onClick={this.toggle} className="nav-link" to='/login'>Login</Link>
                <Link onClick={this.toggle} className="nav-link" to='/register'>Register</Link>
              </form>
            )
          }
        </div>
      </div>
    </div>
  </nav>

  }}


const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)