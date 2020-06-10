import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
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
    
    const {auth} = this.props
    
    return (
      <Router>
        <div className="container has-text-centered">

          <div className="hero is-small is-primary">
            <div className="hero-body has-text-centered">
              <Link to='/' className="">
                <h1 className="title is-1">gigHub</h1>
              </Link>
              <Nav />
            </div>
          </div>

          <div className=''>
            {!auth.isAuthenticated &&
              <Route exact path="/" component={Login} />
            }
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/weekly" component={Weekly} />
            <Route exact path="/venues" component={VenuesPage} />
            <Route exact path="/events" component={EventsPage} />
            <Route exact path="/venues/:id" component={Venue} />
            <Route exact path="/events/:id" component={Event} />
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

