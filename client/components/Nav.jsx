import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logoutUser } from '../actions/auth'

class Nav extends React.Component {
  
  render() {
    const { auth, logout } = this.props
    
    return (
    <header className="header navbar-fixed-top">
      <nav className="navbar" role="navigation">
        <div className="container">

              <div className="collapse navbar-collapse nav-collapse">

                <div className="menu-container">
                  <ul className="nav navbar-nav navbar-nav-right">
                    {auth.isAuthenticated
                      ? (
                        <>
                          <Link to='/' className="navbar-item is-large" onClick={() => logout()}>Logout</Link>

                          <Link to='/Pets' className="navbar-item" replace>Venues</Link>
                          <Link to='/AddNew' className="navbar-item" replace>Events</Link>
                        </>
                      )
                      : (
                        <>
                          <Link onClick={this.toggleBurger} className="navbar-item is-large" to='/login'>Login</Link>
                          <br></br>
                          <Link onClick={this.toggleBurger} className="navbar-item" to='/register'>Register</Link>
                        </>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
  </nav>
</header>
)
  }}


const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser())
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)