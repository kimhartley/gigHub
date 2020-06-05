import React from 'react'
import {connect} from 'react-redux'

export function venuesPage(props) {
    
    return (
        <div>

        <h1>Venues</h1>

        {props.venues.map (venues => 
            <div>
                {venues.name} 
                <br></br>
                {venues.image}
                <br></br>
                {venues.address}
                <br></br>
                {venues.description}
                <br></br>
                {venues.phone}
                <br></br>
                {venues.website}        
                <br></br>  
                <br></br>        
            </div>)}
        </div>
    )
}
function mapStateToProps(state) {

    return {
        events: state.events 
    }
}
export default connect(mapStateToProps)(venuesPage)