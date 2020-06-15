import React from 'react'
import { connect } from 'react-redux'


export function venue(props) {
    
    const venues = props.venues
    const venue = venues.find(venue => venue.name === props.match.params.name)
    return (

        <div className="background">

            {(venue) &&
                <>
                    <div className="card"
                        style={{
                            border: "solid 3px #d3d3d3",
                            margin: "10px auto",
                            padding: "0px"
                        }}>
                        <ul style={{
                            padding: "0px",
                            margin:"10px"
                        }}>
                            <img className="card-img" src={venue.image} />
                            <div className="content">
                                <h2>{venue.name}</h2>
                                <div>
                                    Address: {venue.address}
                                    <br/>
                                    Description: {venue.description}
                                    <br/>
                                    Ph: {venue.phone}
                                    <br/>
                                    <a>{venue.website}</a>
                                </div>
                            </div>
                        </ul>

                    </div>
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