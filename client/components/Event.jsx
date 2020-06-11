import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export function event(props) {

    console.log(props.match.params)
    
    const events = props.events
    const event = events.find(event => (props.match.params))
    
    return (
         
         <div>
            
             {(event) &&
                <>
                <img src={event.image}></img>
                <h1>Event: {event.name}</h1>
                <Link to= {`/venues/${event.venue}`}><p>{event.venue}</p></Link>
                <p>Description: {event.description}</p>
                <p>Other: {event.other}</p>
                <br></br>
                </>
            }   
          </div>
    )
}

function mapStateToProps(state) {

    return {
        events: state.events 
    }
}
export default connect(mapStateToProps)(event)

