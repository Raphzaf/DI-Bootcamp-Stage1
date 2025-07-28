import React from 'react';
import { useSelector } from 'react-redux';
import logo from '../../assets/spinner.svg'; // Remplace avec une vraie icône/spinner si nécessaire

const AgeDisplay = () => {
  const { value, loading } = useSelector((state) => state.age);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Your Age: {value}</h2>
      {loading && <img src={logo} alt="Loading..." width={50} />}
    </div>
  );
};

export default AgeDisplay;
