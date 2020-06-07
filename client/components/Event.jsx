import React from 'react'
import {connect} from 'react-redux'

export function eventPage(props) {
    
    return (
        <div>

        <h1>{events.name}</h1>

        {props.events.map((events) =>
                <div key={events.id}>
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
export default connect(mapStateToProps)(eventPage)