import React from 'react';
import AgeDisplay from './features/age/AgeDisplay';
import AgeControls from './features/age/AgeControls';

function App() {
  return (
    <div>
      <h1>Age Tracker</h1>
      <AgeDisplay />
      <AgeControls />
    </div>
  );
}

export default App;
