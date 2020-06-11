import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

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

    render(){
   
        return (
   
            <div className="background">
                <h1 className="title is-1">Events</h1>
                   <div className="column">
                        {this.props.events.map((event) =>
                        <div key={event.id}>
                            <img className="pic" src={event.image}></img>
                            <Link to= {`/events/${event.name}`}><p className="link">Event: {event.name}</p></Link>
                            <Link to= {`/venues/${event.venue}`}><p className="link">Venue: {event.venue}</p></Link>
                            <br></br>
                        </div>
                        )}
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
