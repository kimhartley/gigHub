import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchDays } from '../actions/days'
import { fetchEvents } from '../actions/events'
import { fetchVenues } from '../actions/venues'
import { checkAuth } from '../actions/auth'

import EventsPage from './EventsPage'
import VenuesPage from './VenuesPage'
import Event from './Event'
import Venue from './Venue'
import Weekly from './Weekly'
import Login from './Login'
import Register from './Register'
import Nav from './Nav'

export class App extends React.Component {

  componentDidMount() {

    const confirmSuccess = () => { }
    this.props.dispatch(checkAuth(confirmSuccess))
    this.props.dispatch(fetchDays())
    this.props.dispatch(fetchEvents())
    this.props.dispatch(fetchVenues())
  }

  render() {

    const { auth } = this.props

    return (
      <Router>

        <div className="screen">

          <div className="card">
            <div className="form-inline my-2 my-lg-0">
              <Link to='/' className="">
                <h1 className="title is-1">gigHub</h1>
              </Link>
              <Nav className="form-control mr-sm-2" />
              
            </div>
          </div>
          <br></br>
          <div className='card'>
            {auth.isAuthenticated &&
              <Route exact path="/" component={Weekly} />
            }
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/weekly" component={Weekly} />
            <Route exact path="/venues" component={VenuesPage} />
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/venues/:name" component={Venue} />
            <Route exact path="/events/:name" component={Event} />
            <Route exact path="/{venue.website}" component={Venue} />
          </div>

        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
