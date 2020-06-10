import React from 'react'
import {connect} from 'react-redux'

export function event(props) {

    console.log(props.match.params)
  
    const events = props.events
  
    return (
         
         <div>
             <h1>{events.name}</h1>
              hello
            {(props.match.params == events.id) && 
                <>
                <p>{events.image}</p>
                <p>{events.venue}</p>
                <p>{events.description}</p>
                <p>{events.other}</p>
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

