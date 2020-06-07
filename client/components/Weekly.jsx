import React from 'react'
import { connect } from 'react-redux'

export function weekly(props) {

    return (
        <div>

            <h1>The Weekly Line Up</h1>

            {props.days.map((days) =>
                <div key={days.id}>
                    <p>{days.day}</p>
                    <p>{days.date}</p>
                    <p>{days.venue}</p>
                    <p>{days.event}</p>
                    <p>{days.artist1}</p>
                    <p>{days.artist2}</p>
                    <p>{days.artist3}</p>
                    <br></br>
                </div>
            )}
            
        </div>
    )
}
function mapStateToProps(state) {

    return {
        days: state.days
    }
}
export default connect(mapStateToProps)(weekly)