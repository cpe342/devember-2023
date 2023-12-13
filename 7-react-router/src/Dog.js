import React, { Component } from 'react'

class Dog extends Component {
    render() {
        return (
            <div>
                <h1>This is the dog component</h1>
                <h3>This dog's name is {this.props.name}</h3>
            </div>

        )
    }
}

export default Dog;