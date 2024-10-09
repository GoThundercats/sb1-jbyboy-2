import React from 'react';
import { Card as CardType } from '../utils/types';

interface CardProps {
  card: CardType;
  onClick: () => void;
  selected: boolean;
}

const Card: React.FC<CardProps> = ({ card, onClick, selected }) => {
  const getSuitColor = (suit: string) => {
    return ['♥', '♦'].includes(suit) ? 'text-red-500' : 'text-black';
  };

  if (!card.faceUp) {
    return (
      <div
        className="w-16 h-24 bg-blue-500 border-2 border-gray-300 rounded-lg cursor-pointer"
        onClick={onClick}
      />
    );
  }

  return (
    <div
      className={`w-16 h-24 bg-white border-2 ${
        selected ? 'border-yellow-400' : 'border-gray-300'
      } rounded-lg flex flex-col justify-between p-1 cursor-pointer hover:shadow-lg transition-shadow`}
      onClick={onClick}
    >
      {card.isZonker ? (
        <div className="w-full h-full flex items-center justify-center text-2xl font-bold">
          Z
        </div>
      ) : card.isParkingLot ? (
        <div className="w-full h-full flex items-center justify-center text-2xl font-bold">
          P
        </div>
      ) : (
        <>
          <div className={`text-sm font-bold ${getSuitColor(card.suit)}`}>
            {card.rank}
          </div>
          <div className={`text-2xl ${getSuitColor(card.suit)}`}>{card.suit}</div>
          <div className={`text-sm font-bold self-end ${getSuitColor(card.suit)}`}>
            {card.rank}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;