import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from './plannerSlice';

const DatePicker = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.planner.selectedDate);

  return (
    <input
      type="date"
      value={selectedDate}
      onChange={(e) => dispatch(selectDate(e.target.value))}
    />
  );
};

export default DatePicker;
