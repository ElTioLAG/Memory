import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from '../src/components/Card'
import { getCards } from '../src/fakeAPI'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cards: null
    }
  }

    componentDidMount() {
      getCards().then((response) => {
        this.setState(() => {
          return {cards: response}
        })
      })
    };
  
    render() {
  
      return (
        <div className="App">
          {
            this.state.cards &&
            this.state.cards.map((card) => {
              return (
                <Card card={card}></Card>
              )
            })
          }
        </div>
      )
    }
  }
  



export default App;
