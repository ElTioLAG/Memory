import React from 'react';
import './card.css'
import cardBack from '../images/cardBack.png'

class Card extends React.Component {

    cardClickeada = () => {
        this.props.cardClickeada(this.props.card)
    }
    render() {
        return (
            <div className="container">
                <div className={`card ${this.props.card.status}`} onClick={this.cardClickeada}>
                    <div className="back">
                        <img alt={`Parte trasera de la carta con id  ${this.props.card.id}`} src={cardBack} />
                    </div>
                    <div className="front">
                        {this.props.card.photo ?
                            <img alt={`Parte trasera de la carta con id  ${this.props.card.id}`} src={this.props.card.photo} /> :
                            <p>{this.props.card.text}</p>
                        }
                    </div>
                </div>
            </div>
        )

    }
}

export default Card;