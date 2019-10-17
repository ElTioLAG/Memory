import React from 'react';
import './card.css'
import cardBack from '../images/cardBack.png'

class Card extends React.Component {
    
    render() {
        return (
            <div class="card">
                <section class="front">
                    {/* <p>{this.props.card.id}</p> */}
                </section>
                <section class="back">
                    <a href="/#">
                        <img src={cardBack} alt="Parte trasera de la carta"/>
                    </a>
                </section>
            </div>
        )
    }
}

export default Card;