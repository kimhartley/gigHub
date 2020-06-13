import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class venuesPage extends React.Component {

    render() {

        return (

            <div className="background">

                <h1 className="title is-1">Venues</h1>

                <div className="card"
                    style={{
                        border: "solid 3px #d3d3d3",
                        margin: "10px auto",
                        padding: "0px"
                    }}>
                    {this.props.venues.map((venue) =>
                        <div key={venue.id}>
                            <ul className="align" style={{
                                padding: "0px",
                                margin:"10px"
                            }}>
                                <img className="card-img" src={venue.image} />
                                <Link to={`/venues/${venue.name}`}>Venue: {venue.name}</Link>
                            </ul>

                        </div>)}
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {

    return {
        venues: state.venues
    }
}
export default connect(mapStateToProps)(venuesPage)