import React, { useState, useEffect } from 'react';
import { Card as CardType } from '../utils/types';
import { initializeDeck, shuffleDeck, haul, performBargain, performFleaHop, performDevilHop, performWalkyTalky, performZonkOut, performHangout, performEasyGo } from '../utils/gameLogic';
import Card from './Card';
import RulesModal from './RulesModal';
import RulesReference from './RulesReference';

const Game: React.FC = () => {
  const [deck, setDeck] = useState<CardType[]>([]);
  const [bankroll, setBankroll] = useState<CardType[]>([]);
  const [market, setMarket] = useState<CardType[]>([]);
  const [easyGo, setEasyGo] = useState<CardType[]>([]);
  const [selectedCards, setSelectedCards] = useState<CardType[]>([]);
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [message, setMessage] = useState('');
  const [isRulesOpen, setIsRulesOpen] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const newDeck = initializeDeck();
    const shuffledDeck = shuffleDeck(newDeck);
    setDeck(shuffledDeck);
    setBankroll([]);
    setMarket(shuffledDeck);
    setEasyGo([]);
    setScore(0);
    setStrikes(0);
    setMessage('');
    setSelectedCards([]);
  };

  const handleCardClick = (card: CardType) => {
    setSelectedCards(prev => 
      prev.includes(card) ? prev.filter(c => c !== card) : [...prev, card]
    );
  };

  const handleHaul = () => {
    const result = haul(market, selectedCards);
    if (result.success) {
      setMarket(result.newMarket);
      setScore(prev => prev + result.score);
      setSelectedCards([]);
      setMessage(`Haul successful! Score: +${result.score}`);
    } else {
      setMessage('Invalid haul. Try again.');
    }
  };

  const handleBargain = () => {
    if (selectedCards.length !== 2) {
      setMessage('Select exactly two adjacent cards to bargain.');
      return;
    }
    const result = performBargain(market, selectedCards[0], selectedCards[1]);
    if (result.success) {
      setMarket(result.newMarket);
      setScore(prev => prev - 1);
      setSelectedCards([]);
      setMessage('Bargain successful! Score: -1');
    } else {
      setMessage('Invalid bargain. Cards must be adjacent.');
    }
  };

  const handleFleaHop = () => {
    if (selectedCards.length !== 1) {
      setMessage('Select exactly one card to perform a flea hop.');
      return;
    }
    const result = performFleaHop(market, selectedCards[0]);
    if (result.success) {
      setMarket(result.newMarket);
      setSelectedCards([]);
      setMessage('Flea hop successful!');
    } else {
      setMessage('Invalid flea hop. Try again.');
    }
  };

  const handleDevilHop = () => {
    if (selectedCards.length !== 4) {
      setMessage('Select exactly four cards (one of each suit) for a devil hop.');
      return;
    }
    const result = performDevilHop(market, selectedCards);
    if (result.success) {
      setMarket(result.newMarket);
      setScore(prev => prev - 3);
      setSelectedCards([]);
      setMessage('Devil hop successful! Score: -3');
    } else {
      setMessage('Invalid devil hop. Ensure you have one card of each suit.');
    }
  };

  const handleWalkyTalky = () => {
    if (selectedCards.length !== 3) {
      setMessage('Select exactly three cards for a walky talky.');
      return;
    }
    const result = performWalkyTalky(market, selectedCards);
    if (result.success) {
      setMarket(result.newMarket);
      setScore(prev => prev - 3);
      setSelectedCards([]);
      setMessage('Walky talky successful! Score: -3');
    } else {
      setMessage('Invalid walky talky. Try again.');
    }
  };

  const handleZonkOut = () => {
    if (selectedCards.length !== 2) {
      setMessage('Select exactly two cards to zonk out.');
      return;
    }
    const result = performZonkOut(market, selectedCards);
    if (result.success) {
      setMarket(result.newMarket);
      setEasyGo(prev => [...prev, ...selectedCards]);
      setSelectedCards([]);
      setMessage('Zonk out successful!');
    } else {
      setMessage('Invalid zonk out. Try again.');
    }
  };

  const handleHangout = () => {
    if (selectedCards.length < 2) {
      setMessage('Select at least two cards to hang out.');
      return;
    }
    const result = performHangout(market, selectedCards);
    if (result.success) {
      setMarket(result.newMarket);
      setBankroll(prev => [...prev, ...selectedCards]);
      setSelectedCards([]);
      setMessage('Hangout successful!');
    } else {
      setMessage('Invalid hangout. Try again.');
    }
  };

  const handleEasyGo = () => {
    if (selectedCards.length !== 2) {
      setMessage('Select exactly two cards for Easy Go.');
      return;
    }
    const result = performEasyGo(market, selectedCards);
    if (result.success) {
      setMarket(result.newMarket);
      setEasyGo(prev => [...prev, ...selectedCards]);
      setScore(prev => prev - 1);
      setSelectedCards([]);
      setMessage('Easy Go successful! Score: -1');
    } else {
      setMessage('Invalid Easy Go. Cards must be adjacent and of the same suit.');
    }
  };

  return (
    <div className="game-container">
      <h1 className="text-3xl font-bold mb-4">Flea Devil Solitaire</h1>
      <div className="game-info mb-4">
        <p>Score: {score}</p>
        <p>Strikes: {strikes}</p>
      </div>
      <div className="message mb-4">{message}</div>
      <div className="controls mb-4">
        <button onClick={handleHaul} className="btn">Haul</button>
        <button onClick={handleBargain} className="btn">Bargain</button>
        <button onClick={handleFleaHop} className="btn">Flea Hop</button>
        <button onClick={handleDevilHop} className="btn">Devil Hop</button>
        <button onClick={handleWalkyTalky} className="btn">Walky Talky</button>
        <button onClick={handleZonkOut} className="btn">Zonk Out</button>
        <button onClick={handleHangout} className="btn">Hangout</button>
        <button onClick={handleEasyGo} className="btn">Easy Go</button>
        <button onClick={() => setIsRulesOpen(true)} className="btn">Rules</button>
        <button onClick={initializeGame} className="btn">New Game</button>
      </div>
      <div className="game-areas">
        <div className="bankroll-area">
          <h2>Bankroll</h2>
          <div className="card-grid">
            {bankroll.map((card, index) => (
              <Card key={index} card={card} onClick={() => handleCardClick(card)} selected={selectedCards.includes(card)} />
            ))}
          </div>
        </div>
        <div className="market-area">
          <h2>Market</h2>
          <div className="card-grid">
            {market.map((card, index) => (
              <Card key={index} card={card} onClick={() => handleCardClick(card)} selected={selectedCards.includes(card)} />
            ))}
          </div>
        </div>
        <div className="easy-go-area">
          <h2>Easy Go</h2>
          <div className="card-grid">
            {easyGo.map((card, index) => (
              <Card key={index} card={card} onClick={() => handleCardClick(card)} selected={selectedCards.includes(card)} />
            ))}
          </div>
        </div>
      </div>
      <RulesModal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} />
      <RulesReference />
    </div>
  );
};

export default Game;