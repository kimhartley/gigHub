import React from 'react'
import {connect} from 'react-redux'

export function eventsPage(props) {
    
    return (
        <div>

        <h1>Events</h1>

        {props.events.map((events) =>
                <div key={events.id}>
                    <p>{events.name}</p>
                    <p>{events.image}</p>
                    <p>{events.venue}</p>
                    <p>{events.description}</p>
                    <p>{events.other}</p>
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