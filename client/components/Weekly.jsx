import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class weekly extends React.Component {

    render() {

        return (
            <div className="background">

                <h1 className="title is-1">The Weekly Line Up</h1>

                <div className="cards"
                    style={{
                        border: "solid 3px #d3d3d3",
                        margin: "10px auto",
                        padding: "0px"
                    }}>
                    {this.props.days.map((days) =>
                        <div key={days.id}>
                            <ul style={{
                                padding: "0px",
                                margin:"10px"
                            }}>
                                <div>
                                    <h3>{days.day}</h3>
                                    Date: {days.date}
                                    <br />
                                    <Link to={`/venues/${days.venue}`}>Venue: {days.venue}</Link>
                                    <br />
                                    <Link to={`/events/${days.event}`}>Event: {days.event}</Link>
                                    <br/>
                                    Artist: {days.artist1}
                                    <br />
                                    Artist: {days.artist2}
                                    <br />
                                    Artist: {days.artist3}
                                    <br></br>
                                </div>
                            </ul>

                        </div>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        days: state.days
    }
}
export default connect(mapStateToProps)(weekly)