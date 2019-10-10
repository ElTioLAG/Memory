import React from 'react';
import './card.css'
import cardBack from '../images/cardBack.png'

class Card extends React.Component {
    
      render() {
        return (
            <div class="card">
                <section class="front"></section>
                <section class="back">
                    <a>
                        <img src={cardBack}/>
                    </a>
                </section>
            </div>
        )
    }
}

export default Card;