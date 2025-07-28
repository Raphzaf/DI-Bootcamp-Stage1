import React from 'react';
import { useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from './ageSlice';

const AgeControls = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
      <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
    </div>
  );
};

export default AgeControls;
