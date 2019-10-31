import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '../src/components/Card'
import { getCards } from '../src/fakeAPI'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: null,
      card1: null,
      card2: null,

    }
  }

  componentDidMount() {
    getCards().then((response) => {
      this.setState(() => {
        return { cards: response }
      })
    })
  };

  manejadorCardClickeada = (clickedCard) => {

    let card1 = this.state.card1;
    let card2 = this.state.card2;

    if (clickedCard.status === "oculto") {
      clickedCard.status = "jugando"

      // Si la card1 es null, se le asigna la carta, lo que significa que guarda la primer carta clickeada
      if (card1 === null) {
        this.setState(() => {
          return { card1: clickedCard }
        })
        console.log(card1);

      } else if (card2 === null) {
        // Si la card1 no es null, se le asigna la 2da carta clickeada a card2, debido a que la 1er card fue guardada en card1
        this.setState(() => {
          return { card2: clickedCard }
        })
        console.log(card2);
        // Si card1 y card2 tienen una carta asignada, se comparan, en caso de tener la misma idPar quedan visibles, sino se oculton de nuevo.
        if (card1.idPair === card2.idPair) {
          this.setState(prevState => ({
            card2: { ...prevState.card2, status: "encontrada", },
            cards: prevState.cards.map(i =>
              i.id === card1.id ? { ...i, status: "encontrada" } : i
            ),
            enontrada: true
          }))
          setTimeout(() => {
            this.setState(() => ({
              encontrada: false
            }))
          }, 1000);
        } else {
          this.setState(prevState => ({
            card2: { ...prevState.card2, status: 'no-encontrada' },
            card1: { ...prevState.card1, status: 'no-encontrada' },
            cartas: prevState.cartas.map(
              i => i.id === card1.id ? { ...i, status: 'no-encontrada' } : i
            )
          }))
        }

      } else {
        if (card1.status === 'no-encontrada' && card2.status === 'no-encontrada') {
          this.setState(prevState => ({
            cartas: prevState.cartas.map(
              i => i.id === card1.id || i.id === card2.id ? { ...i, status: 'oculto' } : i
            )
          }))
        }
        this.setState(() => ({
          card1: clickedCard,
          card2: null
        }))
      }
    }

    console.log("encontradas");
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
