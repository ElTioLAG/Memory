import React from 'react';
import './card.css'
import cardBack from '../images/cardBack.png'

class Card extends React.Component {

    cardClickeada = () => {
        this.props.cardClickeada(this.props.card)
    }
    render() {
        return (
            <div className="card" onClick={this.cardClickeada}>
                {
                    this.props.card.status === "oculto" ?
                        <div className="back">
                            <a href="/#">
                                <img src={cardBack} alt="Parte trasera de la carta" />
                            </a>
                        </div> :
                        <div className="front">
                            {/* <p>{this.props.card.id}</p> */}
                        </div>
                }
            </div>
        )

    }
}

export default Card;