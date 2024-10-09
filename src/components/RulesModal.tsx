import React from 'react';

interface RulesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-3xl font-bold mb-4">Flea Devil Solitaire Rules</h2>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Introduction</h3>
          <p>
            Flea Devil Solitaire is a unique card game invented by Frank Edward Nora over the course of 16 years (2007–2023). From its origin as "Shufflin' Jamboreee", to its slow development over the years, to the flurry of activity in 2022 which led to its penultimate form, to the summer 2023 breakthroughs, every step can be heard on Frank's show, The Overnightscape.
          </p>
          <p>
            This game is a companion to Onsug Radio, and can be played while listening. Flea Devil Solitaire is unique in that you hold the deck in your hands at all times – there is no need to place cards on a flat surface at any time. It also can be paused at any time. It's a pocket game system and natural digital detox.
          </p>
          <p>
            The theme of the game is buying and selling items at a flea market. That's where the name comes from – "Flea Devil" is a made-up term for someone who is very good at buying and selling things at a flea market.
          </p>
          <p>
            Being so different from other games, Flea Devil Solitaire can take some time to learn. But once you know it, the deck of cards you've always had will become your best friend. It's a whole new leisure pursuit!
          </p>

          <h3 className="text-2xl font-semibold">Overview</h3>
          <p>
            A Flea Devil Solitaire game is played over a number of rounds. Each round can end in a win, with a score, or a loss, which counts as a strike. Keep playing rounds till you reach your third strike, which ends the game. Then add up your score.
          </p>

          <h3 className="text-2xl font-semibold">Equipment</h3>
          <p>
            Flea Devil Solitaire game uses a 56-card deck – a standard 52-card deck of playing cards, plus two Zonkers (jokers) and two Parking Lots (the other 2 cards that come in most decks). You'll also need a way to keep score – paper or digital.
          </p>

          <h3 className="text-2xl font-semibold">Zonkers</h3>
          <p>
            Zonkers represent weirdos hanging out at the flea market, and are represented by jokers. Unlike jokers – Zonkers are not wild – they just get in the way, and prevent Flea Hops. They have no suit or rank.
          </p>
          <p>
            Whenever the two Zonkers are adjacent, you can Zonk Out and send one of them face down to the Easy Go, for free. Also, if a Zonker is adjacent to a Parking Lot, you can Zonk Out for free.
          </p>

          <h3 className="text-2xl font-semibold">Parking Lots</h3>
          <p>
            Parking Lots are represented by the two additional cards that come with most playing card decks. Ideally, they should have the same cardback as the rest of the cards – as is the case in some higher-end decks. But it will work no matter what is on the extra cards.
          </p>
          <p>
            After shuffling, the first move of the round is to choose one of the two Parking Lots to move to the bottom of the deck – to make a dividing line between the Market and the Easy Go. If one of the Parking Lots is already at the bottom, you can choose to keep it at the bottom and that counts as moving it. Note that no card in the Market can be moved under this dividing line.
          </p>

          <h3 className="text-2xl font-semibold">Areas</h3>
          <p>
            There are 3 areas in the game. The Market is the main face-up set of cards. The Bankroll is the set of face-down cards above the Market, and the Easy Go is the set of face-down and face-up cards below the Market.
          </p>

          <h3 className="text-2xl font-semibold">Basic Moves</h3>
          <ul className="list-disc list-inside">
            <li><strong>Haul:</strong> Remove adjacent cards of the same rank</li>
            <li><strong>Bargain ($1):</strong> Swap the position of any two adjacent cards</li>
            <li><strong>Flea Hop:</strong> Move a card within a set of the same suit (free)</li>
            <li><strong>Devil Hop ($3):</strong> Move a set of four cards (one of each suit)</li>
            <li><strong>Walky Talky ($3):</strong> Move the middle card of a run to a matching card</li>
            <li><strong>Zonk Out:</strong> Remove adjacent Zonkers or a Zonker next to a Parking Lot</li>
            <li><strong>Hangout:</strong> Remove a Parking Lot and its adjacent matching cards</li>
            <li><strong>Easy Go ($1):</strong> Remove a pair of adjacent cards with the same suit</li>
          </ul>

          <p className="mt-4 text-sm italic">
            License for these game rules: Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0) (https://creativecommons.org/licenses/by-nc-nd/4.0/). Attribution: by Frank Edward Nora – more info at onsug.com
          </p>
        </div>
        <button
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Close Rules
        </button>
      </div>
    </div>
  );
};

export default RulesModal;