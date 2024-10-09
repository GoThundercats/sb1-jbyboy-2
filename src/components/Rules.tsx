import React from 'react';

interface RulesProps {
  onClose: () => void;
}

const Rules: React.FC<RulesProps> = ({ onClose }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Flea Devil Solitaire Rules</h2>
      <p>
        Flea Devil Solitaire is a unique card game invented by Frank Edward Nora. The theme of the game is buying and selling items at a flea market.
      </p>
      <h3 className="text-xl font-semibold">Overview</h3>
      <p>
        The game is played over multiple rounds. Each round can end in a win (with a score) or a loss (which counts as a strike). Keep playing rounds until you reach your third strike, which ends the game. Then add up your score.
      </p>
      <h3 className="text-xl font-semibold">Equipment</h3>
      <p>
        The game uses a 56-card deck: a standard 52-card deck, plus two Zonkers (jokers) and two Parking Lots.
      </p>
      <h3 className="text-xl font-semibold">Basic Moves</h3>
      <ul className="list-disc list-inside">
        <li>Haul: Remove adjacent cards of the same rank</li>
        <li>Bargain: Swap the position of any two adjacent cards for $1</li>
        <li>Flea Hop: Move a card within a set of the same suit for free</li>
        <li>Devil Hop: Move a set of four cards (one of each suit) for $3</li>
        <li>Walky Talky: Move the middle card of a run to a matching card for $3</li>
        <li>Zonk Out: Remove adjacent Zonkers or a Zonker next to a Parking Lot</li>
      </ul>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={onClose}
      >
        Close Rules
      </button>
    </div>
  );
};

export default Rules;