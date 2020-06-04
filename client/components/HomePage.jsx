import React from 'react'
import {connect} from 'react-redux'

import Days from './Days'

export function homePage(props) {
  
  console.log(props)
    return (
        <div>

        <h1>The Weekly Line Up</h1>

        {props.days.map(days => <Days
            
            key={days.id} id={days.id}
            
            days={days.name}
             
        />)} 
        
        </div>
    )
}
function mapStateToProps(state) {

    return {
        days: state.days 
    }
}
export default connect(mapStateToProps)(homePage)