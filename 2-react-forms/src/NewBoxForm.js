import React, { Component } from 'react'
import "./NewBoxForm.css";


class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: '',
            width: '',
            height: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeBox = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }


    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({ color: '', width: '', height: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input name="color" value={this.state.color}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="width">Width:</label>
                    <input name="width" value={this.state.width}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height:</label>
                    <input name="height" value={this.state.height}
                        onChange={this.handleChange}
                    />

                </div>
                <button>Add!</button>
            </form>
        )
    }
}

export default NewBoxForm;