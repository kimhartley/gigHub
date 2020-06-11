import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

export function weekly(props) {

    return (
        <div className="background">

            <h1 className="title is-1">The Weekly Line Up</h1>
            <div className="weekly">
                {props.days.map((days) =>
                    <div key={days.id}>
                        <p className="text">{days.day}</p>
                        <p className="text">{days.date}</p>
                        <Link to= {`/venues/${days.venue}`}><p className="link">Event: {days.venue}</p></Link>
                        <Link to= {`/events/${days.event}`}><p className="link">Event: {days.event}</p></Link>
                        <p className="text">Artist: {days.artist1}</p>
                        <p className="text">Artist: {days.artist2}</p>
                        <p className="text">Artist: {days.artist3}</p>
                        <br></br>
                    </div>
                )}
                </div>
        </div>
    )
}
function mapStateToProps(state) {

    return {
        days: state.days
    }
}
export default connect(mapStateToProps)(weekly)