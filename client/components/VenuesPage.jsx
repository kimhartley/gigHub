import React from 'react'
import { connect } from 'react-redux'

export function venuesPage(props) {

    return (
        <div>

            <h1>Venues</h1>

            {props.venues.map((venues) =>
                <div key={venues.id}>
                    <Link to= {`/venues/${venues.name}`}><p>{venues.name}</p></Link>
                    <img src={venues.image}></img>
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