import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../actions/auth'

class Nav extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      showBurger: false
    }
    this.toggleBurger = this.toggleBurger.bind(this)
  }
  toggleBurger() {
    this.setState({showBurger: !this.state.showBurger})
  }

  render() {
    
    const { auth, logout } = this.props
    const {showBurger} = this.state

    return <nav className="card">
    <div className="container">
      <div className="nav-item active">
        <span onClick={this.toggleBurger} className={`navbar-burger burger ${showBurger ? 'is-active': ''}`} data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" className={`navbar-menu ${showBurger ? "is-active" : ''}`}>
        <div>
          { auth.isAuthenticated
            ? (
              
              <form className="form-inline">
                <Link onClick={this.toggleBurger} className="nav-link" to='/events'>Events</Link>
                <Link onClick={this.toggleBurger} className="nav-link" to='/venues'>Venues</Link>
                <Link onClick={this.toggleBurger} className="nav-link" to='/weekly'>Weekly</Link>
                <Link to='/' className="nav-link" onClick={() => logout()}>Logout</Link>
              </form>
              )
            : (
              <form className="form-inline">
                <Link onClick={this.toggleBurger} className="nav-link" to='/login'>Login</Link>
                <Link onClick={this.toggleBurger} className="nav-link" to='/register'>Register</Link>
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