import React from 'react'
import { connect } from 'react-redux'


export function venue(props) {
    
    const venues = props.venues
    const venue = venues.find(venues => (props.match.params || venues.name))
    
    return (
         
         <div>
            
             {(venue) &&
                <>
                <img src={venue.image}></img>
                <h1>Venue: {venue.name}</h1>
                <p>Address: {venue.address}</p>
                <p>Description: {venue.description}</p>
                <p>Ph: {venue.phone}</p>
                {/* <Link to= {`/venues/${event.venue}`}><p>{event.venue}</p></Link> */}
                <a role='button'><p>{venue.website}</p></a>
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