import React from 'react';
import Game from './components/Game';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-6xl">
        <Game />
      </div>
    </div>
  );
}

export default App;