import React from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkAuth } from '../actions/auth'

import Event from './Event'
import Venue from './Venue'
import HomePage from './HomePage'


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
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route path="/" component={HomePage} />
            </div>

            <div >
              {/* {!auth.isAuthenticated &&
              <Route path="/home" component={HomePage} />
              } */}
              {/* <Route exact path="/venues" component={Venues} />
              <Route exact path="/events" component={Events} /> */}
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
