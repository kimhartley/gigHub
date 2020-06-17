import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class venuesPage extends React.Component {

    render() {

        return (

            <div className="background">

                <h1 className="title">Venues</h1>

                <div className="cards">
                    {this.props.venues.map((venue) =>
                        <div key={venue.id}>
                            <ul className="align" 
                            style={{
                            border: "solid 1px #d3d3d3",
                            margin: "10px",
                            padding: "5px"
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