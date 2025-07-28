import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
