import React, { Component } from "react";
import Card from "./Card";
import "./Deck.css";
import axios from "axios";
const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null, // Response from API
            drawn: []
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        const deckRequest = await axios.get(`${API_BASE_URL}/new/shuffle`);
        this.setState({ deck: deckRequest.data })
    }

    async getCard() {
        try {
            const newCardRequest = await axios.get(`${API_BASE_URL}/${this.state.deck.deck_id}/draw/`);
            if (newCardRequest.data.success === false) {
                throw new Error("No cards remaining");
            }
            const card = newCardRequest.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`
                    }
                ]
            }))
        } catch (e) {
            alert(e);
        }
    }

    render() {
        const cards = this.state.drawn.map(card => (
            <Card image={card.image} name={card.name}/>
        ))
          return (
            <div className='Deck'>
              <h1 className='Deck-title'>Card Dealer</h1>
              <h2 className='Deck-title subtitle'>
                ♦ Play Your Heart's Content (As long as it's 52 cards) ♦
              </h2>
              <button className='Deck-btn' onClick={this.getCard}>
                Get Card!
              </button>
              <div className='Deck-cardarea'>{cards}</div>
            </div>
          );
    }
}
export default Deck;