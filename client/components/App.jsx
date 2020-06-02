import React from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkAuth } from '../actions/auth'

import Event from './Event'
import Venue from './Venue'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'

export class App extends React.Component {

  componentDidMount() {
    const confirmSuccess = () => { }
    this.props.dispatch(checkAuth(confirmSuccess))
    
  }

  render() {

    const {auth} = this.props

    return (

    <Router>
          <div>

            <div>             
                <h1>♪i♪Hub</h1>
                <Nav />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </div>

            <div >
              {!auth.isAuthenticated}
              
              <Route path="/venues" component={Venues} />
              <Route path="/events" component={Events} />
              
            </div>

        </div>
    </Router>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
