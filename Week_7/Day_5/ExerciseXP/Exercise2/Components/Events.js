        import React, { useState } from 'react';

const Events = () => {
  // === Partie III ===
  const [isToggleOn, setIsToggleOn] = useState(true);

  // === Partie I ===
  const clickMe = () => {
    alert("I was clicked!");
  };

  // === Partie II ===
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  // === Partie III ===
  const toggle = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* === Partie I === */}
      <button onClick={clickMe}>Click Me</button>

      <hr />

      {/* === Partie II === */}
      <input
        type="text"
        placeholder="Press the ENTER key"
        onKeyDown={handleKeyPress}
      />

      <hr />

      {/* === Partie III === */}
      <button onClick={toggle}>Toggle</button>
      <h3>{isToggleOn ? "ON" : "OFF"}</h3>
    </div>
  );
};

export default Events;
