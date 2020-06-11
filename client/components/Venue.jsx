import React from 'react'
import { connect } from 'react-redux'

export function venue(props) {
    
    const venues = props.venues
    const venue = venues.find(venues => (props.match.params || venues.name))
    
    return (
         
         <div>
            
             {(venue) &&
                <>
                <h1>{venue.name}</h1>
                <p>{venue.image}</p>
                <p>{venue.venue}</p>
                <p>{venue.description}</p>
                <p>{venue.other}</p>
                <br></br>
                </>
            }   
          </div>
    )
}

function mapStateToProps(state) {

    return {
        venues: state.venues
    }
}
export default connect(mapStateToProps)(venue)