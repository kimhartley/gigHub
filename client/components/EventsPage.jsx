import React from 'react'
import {connect} from 'react-redux'

export function eventsPage(props) {
    
    return (
        <div>

        <h1>Events</h1>

        {props.events.map (events => 
            <div>
                {events.name} 
                <br></br>
                {events.image}
                <br></br>
                {events.venue}
                <br></br>
                {events.description}
                <br></br>
                {events.other}      
                <br></br>  
                <br></br>        
            </div>)}
        
        </div>
    )
}
function mapStateToProps(state) {

    return {
        events: state.events 
    }
}
export default connect(mapStateToProps)(eventsPage)