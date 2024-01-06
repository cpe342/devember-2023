import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleLogin() {
        alert("Logged In");
        this.props.history.push('/food/mango');
    }

    handleBack() {
        alert("Going Back");
        this.props.history.goBack();
    }

    render() {
        return (
            <div className='Navbar'>
                <button onClick={this.handleBack}>Go Back</button>
                <button onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
}

export default withRouter(Navbar);