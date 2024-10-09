import React from 'react';

const RulesReference: React.FC = () => {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
      <h3 className="text-xl font-bold mb-2">Quick Rules Reference</h3>
      <ul className="list-disc list-inside space-y-1">
        <li><strong>Haul:</strong> Remove adjacent cards of the same rank</li>
        <li><strong>Bargain ($1):</strong> Swap the position of any two adjacent cards</li>
        <li><strong>Flea Hop:</strong> Move a card within a set of the same suit (free)</li>
        <li><strong>Devil Hop ($3):</strong> Move a set of four cards (one of each suit)</li>
        <li><strong>Walky Talky ($3):</strong> Move the middle card of a run to a matching card</li>
        <li><strong>Zonk Out:</strong> Remove adjacent Zonkers or a Zonker next to a Parking Lot</li>
        <li><strong>Hangout:</strong> Remove a Parking Lot and its adjacent matching cards</li>
        <li><strong>Easy Go ($1):</strong> Remove a pair of adjacent cards with the same suit</li>
      </ul>
      <p className="mt-2 text-sm italic">Game is played over 3 rounds. Score is the total of all rounds.</p>
    </div>
  );
};

export default RulesReference;