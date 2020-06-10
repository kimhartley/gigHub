import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {setEvent} from '../actions/events'

export class eventsPage extends React.Component {
   
    componentDidMount () {
   
        const { handle } = this.props.match.params
        console.log(handle)
        fetch(`api/v1/events/${handle}`)
          .then((events) => {
            this.setState(() => ({ events }))
          })
      }

    render(){
   
        return (
   
            <div>
                <h1>Events</h1>
                   
                    {this.props.events.map((events) =>
                    <div key={events.id}>
                        <img src={events.image}></img>
                        <Link to= {`/events/${events.id}`}><p>{events.name}</p></Link>
                        {/* <Link to= {`/venues/${venues.name}`}><p>{events.venue}</p></Link> */}
                        <br></br>
                    </div>
                    )}
            
            </div>
        )
    } 
}

function mapStateToProps(state) {

    return {
        events: state.events
    }
}
export default connect(mapStateToProps)(eventsPage)

// { pathname:
// , state: {
//     getEvent: this.props.eventProps}