import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
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
            <Route path="/venues" component={VenuesPage} />
            <Route path="/events" component={EventsPage} />
            <Route path="/venues/:id" component={Venue} />
            <Route path="/events/:id" component={Event} />
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


// import React from 'react'

// import { HashRouter as Router, Route, Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { checkAuth } from '../actions/auth'





// import Login from './Login'
// import Register from './Register'
// import Nav from './Nav'

// export class App extends React.Component {

//   componentDidMount() {
//     const confirmSuccess = () => {}
//     this.props.dispatch(checkAuth(confirmSuccess))

//   }

//   render() {

//     const {auth} = this.props

//     return (

//     <Router>
//           <div>
//           <div>
//             <div >
//               <Link to='/' className="">
//                 <h1>gighub</h1>
//               </Link>
//               <Nav />
//             </div>
//           </div>

//           <div className=''>
//             {!auth.isAuthenticated &&
//               <Route exact path="/" component={Login} />
//             }
//             <Route path="/login" component={Login} />
//             <Route path="/register" component={Register} />
//           </div>
//             {/* <div>             
//                 <h1>♪i♪Hub</h1>
//                 <Nav />
//                 <Route exact path="/login" component={Login} />
//                 <Route exact path="/register" component={Register} />
//             </div>

//             <div >
//               {!auth.isAuthenticated &&
//               <Route path="/home" component={HomePage} />
//               }
//               
//             </div> */}

//         </div>
//     </Router>
//     )
//   }
// }

// const mapStateToProps = ({auth}) => {
//   return {
//     auth
//   }
// }

// export default connect(mapStateToProps)(App)
