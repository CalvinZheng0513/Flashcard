import './App.css';
import { useState } from "react";
import Flashcard from './components/Flashcard';
import BitcoinImage from './assets/Bitcoin.png';
import EtherumImage from './assets/Etherum.png';
import CardanoImage from './assets/Cardano.png';
import DogecoinImage from './assets/Dogecoin.png';
import SolanaImage from './assets/Solana.png';

const App = () => {
  const [currentcard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const cards = {
    0: 'Bitcoin',
    1: 'Etherum',
    2: 'Cardano',
    3: 'Dogecoin',
    4: 'Solana',
  }

  function randomCard() {
    let randomIndex = Math.floor(Math.random() * (Object.keys(cards).length));
    while (randomIndex === currentcard) {
      randomIndex = Math.floor(Math.random() * (Object.keys(cards).length));
    }
    setCurrentCard(randomIndex);
    setFlipped(false);
  }

  function toggleFlipped() {
    setFlipped(!flipped);
  }

  return (
    <div className='App'>
      <h2>Crypto Testing Flashcard.</h2>
      <h4>Test your knowledge</h4>
      <p>Card Numbers: {Object.keys(cards).length}</p>
      <Flashcard 
        image={
          currentcard === 0 ? BitcoinImage : 
          currentcard === 1 ? EtherumImage : 
          currentcard === 2 ? CardanoImage : 
          currentcard === 3 ? DogecoinImage : 
          SolanaImage
        } 
        answer={cards[currentcard]} 
        state={flipped} 
        onClick={toggleFlipped} 
      />

      <div className='buttons'>
        <button id='rand-button' onClick={randomCard}>Random</button>
      </div>
    </div>
  )
}

export default App;
