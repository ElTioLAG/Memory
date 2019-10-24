import React from 'react';
import './card.css'
import cardBack from '../images/cardBack.png'

class Card extends React.Component {
    
    cardClickeada = () => {
        this.props.cardClickeada(this.props.Card)
    }
    render() {
        return (
            <div className="card" onClick={this.cardClickeada}>
                <section className="front">
                    {/* <p>{this.props.card.id}</p> */}
                </section>
                <section className="back">
                    <a href="/#">
                        <img src={cardBack} alt="Parte trasera de la carta"/>
                    </a>
                </section>
            </div>
        )

    }
}

export default Card;