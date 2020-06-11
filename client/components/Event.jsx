import React from 'react'
import {connect} from 'react-redux'

export function event(props) {

    console.log(props.match.params)
    
    const events = props.events
    const event = events.find(event => (props.match.params || event.name))
    
    return (
         
         <div>
            
             {(event) &&
                <>
                <h1>{event.name}</h1>
                <p>{event.image}</p>
                <p>{event.venue}</p>
                <p>{event.description}</p>
                <p>{event.other}</p>
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

