import React from 'react'
import {connect} from 'react-redux'

export function homePage(props) {
    
    return (
        <div>

        <h1>The Weekly Line Up</h1>

        {props.days.map (days => 
            <div>
                {days.day} 
                <br></br>
                {days.date}
                <br></br>
                {days.venue}
                <br></br>
                {days.event}
                <br></br>
                {days.artist1}
                <br></br>
                {days.artist2}
                <br></br>
                {days.artist3}      
                <br></br>  
                <br></br>        
            </div>)}
        
        </div>
    )
}
function mapStateToProps(state) {

    return {
        days: state.days 
    }
}
export default connect(mapStateToProps)(homePage)