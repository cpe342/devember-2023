import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import oliveImg from "./smoliv.png";
import Message from './Message';
import './Olive.css';


class Olive extends Component {
    render() {
        return (
            <div>
                <img src={oliveImg} alt='Smoliv from Pokemon'></img>
                <Message>
                    <h1>This is Smoliv</h1>
                    <h1>Gross.....</h1>
                    <Link to='/'>Go Back</Link>
                </Message>
            </div>

        )
    }
}

export default Olive;