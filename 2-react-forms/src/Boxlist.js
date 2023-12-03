import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import uuid from 'uuid'

class Boxlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    // Add new box based on form submission
    addBox(box) {
        let newBox = { ...box, id: uuid() };
        this.setState(state => ({
            boxes: [...state.boxes, newBox]
        }));
    }

    // Remove box based on id
    removeBox(id) {
        console.log('in removebox function')
        this.setState(state => ({
            boxes: state.boxes.filter((e) => e.id !== id)
        }));
    }

    render() {
        // Generate UUID for box
        const boxUuid = uuid()
        // Iterrate over boxes and build box components
        let boxes = this.state.boxes.map((e) =>
            <Box
                id={boxUuid}
                key={boxUuid}
                color={e.color}
                width={e.width}
                height={e.height}
                // Inline way to pass removeBox from parent Boxlist to child Box
                // This doesn't require us to bind the function and have a handler in the child
                removeBox={() => this.removeBox(e.id)}
            />)
        return (
            <div>
                <h1>Box Form Adder</h1>
                {boxes}
                <NewBoxForm
                    addBox={this.addBox}
                ></NewBoxForm>
            </div>
        )
    }
}

export default Boxlist;