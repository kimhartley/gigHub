import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export function event(props) {

    console.log(props.match.params)
    console.log(props)

    const events = props.events
    const event = events.find(event => event.name === props.match.params.name)

    return (

        <div className="background">

            {(event) &&
                <>
                    <div className="card">
                        
                            <ul style={{
                            border: "solid 4px #d3d3d3",
                            margin: "10px auto",
                            padding: "10px"
                        }}>
                                <img className="card-img" src={event.image} />
                                <div className="content">
                                    <h2>{event.name}</h2>
                                    <Link to={`/venues/${event.venue}`}>Venue: {event.venue}</Link>
                                    <div>
                                        Description: {event.description}
                                        <br></br>
                                    Other: {event.other}
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
        events: state.events
    }
}
export default connect(mapStateToProps)(event)

