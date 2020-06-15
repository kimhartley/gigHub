import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


export function event(props) {

    console.log(props.match.params)
    console.log(props)
   
    const events = props.events
    const event = events.find(event => (props.match.params))

    return (

        <div className="background">

            {(event) &&
                <>
                    <div className="card"
                        style={{
                            border: "solid 3px #d3d3d3",
                            margin: "10px auto",
                            padding: "0px"
                        }}>
                        <form className="form-inline">    
                        <ul style={{
                            padding: "0px",
                            margin:"10px"
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
                        </form>
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

