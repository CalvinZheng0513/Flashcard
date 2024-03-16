import './App.css';
import { useState } from "react";
import Flashcard from './components/Flashcard';
import BitcoinImage from './assets/Bitcoin.png';
import EtherumImage from './assets/Etherum.png';
import CardanoImage from './assets/Cardano.png';
import DogecoinImage from './assets/Dogecoin.png';
import SolanaImage from './assets/Solana.png';

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  const cards = [
    { image: BitcoinImage, answer: 'Bitcoin' },
    { image: EtherumImage, answer: 'Etherum' },
    { image: CardanoImage, answer: 'Cardano' },
    { image: DogecoinImage, answer: 'Dogecoin' },
    { image: SolanaImage, answer: 'Solana' }
  ];

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const checkGuess = () => {
    if (guess.toLowerCase() === cards[currentCard].answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect. Try again.');
    }
  };

  const moveToNextCard = () => {
    setCurrentCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
    setFlipped(false);
    setFeedback('');
    setGuess('');
  };

  const moveToPreviousCard = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? cards.length - 1 : prevCard - 1));
    setFlipped(false);
    setFeedback('');
    setGuess('');
  };

  return (
    <div className='App'>
      <h2>Crypto Testing Flashcard.</h2>
      <h4>Test your knowledge</h4>
      <p>Card Numbers: {cards.length}</p>
      <Flashcard
        image={cards[currentCard].image}
        answer={cards[currentCard].answer}
        state={flipped}
        onClick={() => setFlipped(!flipped)}
      />
      
      <div className='guess-input'>
        <input type='text' placeholder='Enter your guess' value={guess} onChange={handleGuessChange} />
        <button onClick={checkGuess}>Submit</button>
        {feedback && <p>{feedback}</p>}
      </div>

      <div className='buttons'>
        <button onClick={moveToPreviousCard}>Back</button>
        <button onClick={moveToNextCard}>Next</button>
      </div>
    </div>
  );
};

export default App;
