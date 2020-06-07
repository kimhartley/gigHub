import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export function eventsPage(props) {
    
    return (
        <div>

        <h1>Events</h1>

        {props.events.map((events) =>
                <div key={events.id}>
                    <img src={events.image}></img>
                    <Link to= {`/events/${events.id}`}><p>{events.name}</p></Link>
                    <Link to= {`/events/${events.id}`}><p>{events.venue}</p></Link>
                    <br></br>
                </div>
            )}
        
        </div>
    )
}
function mapStateToProps(state) {

    return {
        events: state.events 
    }
}
export default connect(mapStateToProps)(eventsPage)