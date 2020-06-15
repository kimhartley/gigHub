import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export class eventsPage extends React.Component {

    // componentDidMount () {

    //     const { name } = this.props.match.params
    //     console.log(name)
    //     fetch(`api/v1/events/${name}`)
    //       .then((events) => {
    //           console.log(events)
    //         this.setState(() => ({ events }))
    //       })
    //   }

    render() {

        return (

            <div className="background">

                <h1 className="title is-1">Events</h1>

                <div className="cards"
                    style={{
                        border: "solid 3px #d3d3d3",
                        margin: "10px auto",
                        padding: "0px"
                    }}>
                    {this.props.events.map((event) =>
                        <div key={event.id}>
                            <ul className="align"style={{
                                padding: "0px",
                                margin:"10px"
                            }}>
                                <img className="card-img" src={event.image} />
                                <Link to={`/events/${event.name}`}>Event: {event.name}</Link>
                                <br></br>
                                <Link to={`/venues/${event.venue}`}>Venue: {event.venue}</Link>
                                <br></br>
                            </ul>

                        </div>)}
                </div>


            </div>

        )
    }
}

function mapStateToProps(state) {

    return {
        events: state.events
    }
}
export default connect(mapStateToProps)(eventsPage)

 
{/* <Card style={{ width: '18rem' }}>
                        {this.props.events.map((event) =>
                        <div key={event.id}>
                        <Card.Img variant="top" src={event.image} />
                            <Card.Body>
                                <Card.Title><Link to= {`/events/${event.name}`}><p className="link">Event: {event.name}</p></Link></Card.Title>
                                <Card.Text><Link to= {`/venues/${event.venue}`}><p className="link">Venue: {event.venue}</p></Link></Card.Text>
                            </Card.Body>
                         </div>)}
                </Card> */}