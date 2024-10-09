import { Card } from './types';

export function initializeDeck(): Card[] {
  const suits = ['♠', '♥', '♦', '♣'];
  const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const deck: Card[] = [];

  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank, faceUp: true, isZonker: false, isParkingLot: false });
    }
  }

  // Add Zonkers and Parking Lots
  deck.push({ suit: '', rank: 'Z', faceUp: true, isZonker: true, isParkingLot: false });
  deck.push({ suit: '', rank: 'Z', faceUp: true, isZonker: true, isParkingLot: false });
  deck.push({ suit: '', rank: 'P', faceUp: true, isZonker: false, isParkingLot: true });
  deck.push({ suit: '', rank: 'P', faceUp: true, isZonker: false, isParkingLot: true });

  return deck;
}

export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function haul(market: Card[], selectedCards: Card[]): { success: boolean; newMarket: Card[]; score: number } {
  if (selectedCards.length < 2) {
    return { success: false, newMarket: market, score: 0 };
  }

  const isValidHaul = selectedCards.every((card, index, array) => {
    if (index === 0) return true;
    return card.rank === array[0].rank && 
           market.indexOf(card) === market.indexOf(array[index - 1]) + 1;
  });

  if (!isValidHaul) {
    return { success: false, newMarket: market, score: 0 };
  }

  const newMarket = market.filter(card => !selectedCards.includes(card));
  const score = selectedCards.length;

  return { success: true, newMarket, score };
}

export function performBargain(market: Card[], card1: Card, card2: Card): { success: boolean; newMarket: Card[] } {
  const index1 = market.indexOf(card1);
  const index2 = market.indexOf(card2);

  if (Math.abs(index1 - index2) !== 1) {
    return { success: false, newMarket: market };
  }

  const newMarket = [...market];
  [newMarket[index1], newMarket[index2]] = [newMarket[index2], newMarket[index1]];

  return { success: true, newMarket };
}

export function performFleaHop(market: Card[], selectedCard: Card): { success: boolean; newMarket: Card[] } {
  const suitCards = market.filter(card => card.suit === selectedCard.suit);
  const currentIndex = suitCards.indexOf(selectedCard);
  
  if (currentIndex === -1 || suitCards.length < 2) {
    return { success: false, newMarket: market };
  }

  const newSuitIndex = (currentIndex + 1) % suitCards.length;
  const newPosition = market.indexOf(suitCards[newSuitIndex]);

  const newMarket = [...market];
  const oldPosition = newMarket.indexOf(selectedCard);
  newMarket.splice(oldPosition, 1);
  newMarket.splice(newPosition, 0, selectedCard);

  return { success: true, newMarket };
}

export function performDevilHop(market: Card[], selectedCards: Card[]): { success: boolean; newMarket: Card[] } {
  // Implement Devil Hop logic
  return { success: false, newMarket: market };
}

export function performWalkyTalky(market: Card[], selectedCards: Card[]): { success: boolean; newMarket: Card[] } {
  // Implement Walky Talky logic
  return { success: false, newMarket: market };
}

export function performZonkOut(market: Card[], selectedCards: Card[]): { success: boolean; newMarket: Card[] } {
  // Implement Zonk Out logic
  return { success: false, newMarket: market };
}

export function performHangout(market: Card[], selectedCards: Card[]): { success: boolean; newMarket: Card[] } {
  // Implement Hangout logic
  return { success: false, newMarket: market };
}

export function performEasyGo(market: Card[], selectedCards: Card[]): { success: boolean; newMarket: Card[] } {
  // Implement Easy Go logic
  return { success: false, newMarket: market };
}