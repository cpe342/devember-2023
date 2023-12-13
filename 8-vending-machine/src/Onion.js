import React, { Component } from "react";
import Message from "./Message";
import { Link } from "react-router-dom";
import onionImg from "./onion.webp";
import "./Onion.css";

class Onion extends Component {
  render() {
    return (
      <div className='Onion'>
        <img src={onionImg} alt='onion from steven universe' />
        <Message>
          <h1>ONION</h1>
          <h3>Be careful... he's up to no good</h3>
          <Link to='/'>Go Back</Link>
        </Message>

        <img src={onionImg} alt='onion from steven universe' />
      </div>
    );
  }
}

export default Onion;