import React, { Component } from 'react'
import './NewTodoForm.css';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            completed: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ text: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='text'>Todo:</label>
                        <input name='text' value={this.state.text} onChange={this.handleChange} />
                    </div>
                    <button>Add!</button>
                </form>
            </div>
        )
    }
}

export default NewTodoForm