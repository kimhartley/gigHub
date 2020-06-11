import React from 'react'
import { connect } from 'react-redux'


export function venue(props) {
    
    const venues = props.venues
    const venue = venues.find(venues => (props.match.params || venues.name))
    
    return (
         
         <div className="background">
            
             {(venue) &&
                <>
                <img className="pic" src={venue.image}></img>
                <h1 className="title">Venue: {venue.name}</h1>
                <p className="text">Address: {venue.address}</p>
                <p className="text">Description: {venue.description}</p>
                <p className="text">Ph: {venue.phone}</p>
                {/* <Link to= {`/venues/${event.venue}`}><p>{event.venue}</p></Link> */}
                <a role='button'><p className="text">{venue.website}</p></a>
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