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
   
            <div>
                <h1>Events</h1>
                   
                    {this.props.events.map((event) =>
                    <div key={event.id}>
                        <img src={event.image}></img>
                        <Link to= {`/events/${event.name}`}><p>Event: {event.name}</p></Link>
                        <Link to= {`/venues/${event.venue}`}><p>{event.venue}</p></Link>
                        <br></br>
                    </div>
                    )}
                    
            
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
