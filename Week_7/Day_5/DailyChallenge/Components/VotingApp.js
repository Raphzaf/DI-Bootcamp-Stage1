import React, { useState } from "react";

const VotingApp = () => {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 2 },
    { name: "Python", votes: 4 },
    { name: "JavaScript", votes: 5 },
    { name: "Java", votes: 1 },
  ]);

  const vote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Vote Your Language!</h1>
      {languages.map((lang, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
          }}
        >
          <div
            style={{
              width: "200px",
              backgroundColor: "#f5e9c5",
              border: "1px solid #999",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 20px",
              alignItems: "center",
              fontSize: "18px",
            }}
          >
            <span>{lang.votes}</span>
            <span>{lang.name}</span>
            <button
              style={{
                backgroundColor: "lightgreen",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
              onClick={() => vote(index)}
            >
              Click Here
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VotingApp;
