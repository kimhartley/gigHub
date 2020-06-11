import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class venuesPage extends React.Component {

    render(){
       
        return (
       
       <div className="background">
            <h1 className="title is-1">Venues</h1>
       
                {this.props.venues.map((venues) =>
                    <div key={venues.id}>
                        <img className="pic" src={venues.image}></img>
                        <Link to= {`/venues/${venues.name}`}><p className="link">{venues.name}</p></Link>
                        <br></br>
                    </div>
                )}
            
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