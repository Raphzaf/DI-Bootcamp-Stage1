import React, { Component } from 'react';
import './Exercise.css';

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        <h1 style={style_header}>This is a heading</h1>
        <p className="para">This is a styled paragraph</p>
        <a href="https://reactjs.org">React Website</a>
        <form>
          <input type="text" placeholder="Enter something" />
        </form>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
