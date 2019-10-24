import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '../src/components/Card'
import { getCards } from '../src/fakeAPI'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cards: null,
      card1: null,
      card2: null
    }
  }

  componentDidMount() {
    getCards().then((response) => {
      this.setState(() => {
        return {cards: response}
      })
    })
  };

  manejadorCardClickeada = (clickedCard) => {
    // Si la card1 es null, se le asigna la carta, lo que significa que guarda la primer carta clickeada
    if (this.state.card1 == null){
      this.setState(() => {
        return {card1: clickedCard}
      })
      console.log(this.state.card1);
    }else if(this.state.card2 == null){
      // Si la card1 no es null, se le asigna la 2da carta clickeada a card2, debido a que la 1er card fue guardada en card1
      this.setState(() => {
        return {card2: clickedCard}
      })
      console.log(this.state.card2);
    }else{
      // Si card1 y card2 tienen una carta asignada, se comparan, en caso de tener la misma idPar quedan visibles, sino se ocultan de nuevo.
      if(this.state.card1.idPair === this.state.card2.idPair){
        console.log("encontradas");
      }else{

      }
    }
  }
  
  render() {
  
    return (
      <div className="App">
        {
          this.state.cards &&
          this.state.cards.map((card) => {
            return (
              <Card card={card} cardClickeada={this.manejadorCardClickeada}></Card>
            )
          })
        }
      </div>
    )
  }
}
  



export default App;
