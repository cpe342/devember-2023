import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            text: this.props.text,
            completed: false
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    // Handler for the passed function from parent
    handleRemove() {
        this.props.removeTodo(this.props.id);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateText(this.props.id, this.state.text);
        this.toggleForm()
    }

    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleToggle(evt) {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        if (this.state.isEditing === true) {
            return (
                <div>
                    <form>
                        <input type='text' value={this.state.text} name='text' onChange={this.handleChange} onClick={this.toggleCompletion}></input>
                        <button onClick={this.handleUpdate}>Save</button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <li className={this.props.completed ? 'completed' : ''} onClick={this.handleToggle}>
                            {this.props.text}
                        </li>
                    </div>
                    <div>
                        <button onClick={this.toggleForm}>Edit</button>
                        {/* Set onClick event for child */}
                        <button onClick={this.handleRemove}>Remove</button>
                    </div>
                </div>
            )
        }

    }
}

export default Todo