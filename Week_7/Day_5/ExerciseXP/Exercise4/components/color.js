import React, { useState, useEffect } from 'react';

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState("red");

  // S'exécute après le premier render
  useEffect(() => {
    setFavoriteColor("yellow");
  }, []);

  const changeColor = () => {
    setFavoriteColor("blue");
  };

  return (
    <div style={{ border: "1px solid grey", padding: "20px", margin: "20px" }}>
      <h1>My Favorite Color is <i>{favoriteColor}</i></h1>
      <button onClick={changeColor}>Change color to blue</button>
    </div>
  );
};

export default Color;
