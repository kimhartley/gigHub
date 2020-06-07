import React from 'react'
import { connect } from 'react-redux'

export function venuesPage(props) {

    return (
        <div>

            <h1>Venues</h1>

            {props.venues.map((venues) =>
                <div key={venues.id}>
                    <p>{venues.name}</p>
                    <p>{venues.image}</p>
                    <p>{venues.address}</p>
                    <p>{venues.description}</p>
                    <p>{venues.phone}</p>
                    <p>{venues.website}</p>
                    <br></br>
                </div>
            )}

        </div>
    )
}
function mapStateToProps(state) {

    return {
        venues: state.venues
    }
}
export default connect(mapStateToProps)(venuesPage)