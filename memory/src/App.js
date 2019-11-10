import React from 'react';
import './App.css';
import Card from '../src/components/card'
import { getCards } from '../src/fakeAPI'
import gif from '../src/images/winningGif.gif'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: null,
      card1: null,
      card2: null,
      userCanDoAction: true,
    }
  }

  componentDidMount() {
    getCards().then((response) => {
      this.setState(() => {
        return { cards: response }
      })
    })
  };

  manejadorCardClickeada = async (clickedCard) => {

    let card1 = this.state.card1;
    let card2 = this.state.card2;

    if (clickedCard.status === "oculto") {
      clickedCard.status = "jugando"

      // Si la card1 es null, se le asigna la carta, lo que significa que guarda la primer carta clickeada
      if (card1 === null) {
        await this.setState({
          card1: clickedCard
        });

      } else if (card2 === null) {
        // Si la card1 no es null, se le asigna la 2da carta clickeada a card2, debido a que la 1er card fue guardada en card1
        await this.setState({
          card2: clickedCard
        });

        // Si card1 y card2 tienen una carta asignada, se comparan, en caso de tener la misma idPar quedan visibles, sino se oculton de nuevo.
        if (this.state.card1.idPair === this.state.card2.idPair) {
          await this.setState(prevState => ({
            card1: { ...prevState.card1, status: "encontrada", },
            card2: { ...prevState.card2, status: "encontrada", },

            cards: prevState.cards.map((i) => {
              return i.id === this.state.card1.id || i.id === this.state.card2.id ? { ...i, status: 'encontrada' } : i
            })

          }))
        } else {
          this.setState(prevState => ({
            userCanDoAction: false
          }))

          setTimeout(() => this.setState(prevState => ({
            card1: { ...prevState.card1, status: 'oculto' },
            card2: { ...prevState.card2, status: 'oculto' },
            cards: prevState.cards.map((i) => {
              return i.id === this.state.card1.id || i.id === this.state.card2.id ? { ...i, status: 'oculto' } : i
            }),
            userCanDoAction: true
          })), 1000)
          
        }

      } else {
        if (this.state.card1.idPair === this.state.card2.idPair) {
          this.setState(prevState => ({
            cards: prevState.cards.map(
              i => i.id === this.state.card1.id || i.id === this.state.card2.id ? { ...i, status: 'encontrada' } : i
            )
          }))
        }
        this.setState(() => ({
          card1: clickedCard,
          card2: null
        }))
      }
    }
  }

  youWon() {
    let notFound = 0 
    this.state.cards.forEach(card => {
      card.status !== 'encontrada' && notFound++
    })
    return notFound === 0 ?  true : false
  }

  render() {
    return (
      <div className="App">
        {
          this.state.cards && this.youWon() ?
            <img src={gif} alt="Gif de 'Ganaste!'" className="gif"/> :
          this.state.cards && this.state.cards.map((card) => {
            return (
              <Card card={card} cardClickeada={this.state.userCanDoAction ? this.manejadorCardClickeada : () => {}}></Card>
            )
          })
        }
      </div>
    )
  } 
}

export default App;
