import React from 'react'

import HomePage from './HomePage'

export class Day extends React.Component {

    state = {
        days: days
    }

    render() {
        return (
            <div>
            
            <HomePage 
                id={this.props.id} 
                name={this.props.name}
                
            />
            
            </div>
        )
    }
}

export default Day