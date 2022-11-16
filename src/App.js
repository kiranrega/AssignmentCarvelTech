import React, { useState } from "react";
import './App.css'
const App = () => {
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [wicketBall, setWicketBall] = useState([]);
  const [noBall, setNoBall] = useState([]);

  function generateRandom(min = -1, max = 7) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    return rand;
  }

  function getScore() {
    let wicketArr = [];
    let wicketCount = 0;
    let noBallArr = [];
    let scoreArr = [];
    let noBallCount = 0;
    for (let i = 1; i <= 120 + noBallCount; i++) {
      let rand = generateRandom();
      if (wicketCount < 10) {
        if (rand === -1) {
          let overs = Math.trunc(i / 6);
          let balls = i % 6;
          wicketArr.push(`${overs}.${balls}`);
          setWicketBall(wicketArr);
          console.log(`${overs}.${balls}`);
          wicketCount = wicketCount + 1;
          setWickets(wicketCount);
        } else if (rand === 0) {
          let overs = Math.trunc(i / 6);
          let balls = i % 6;
          noBallArr.push(`${overs}.${balls}`);
          noBallCount = noBallCount + 1;
          setNoBall(noBallArr);
        } else {
          scoreArr.push(rand);
          setScore(scoreArr.reduce((a, b) => a + b));
        }
      }
    }
  }

  return (
    <div
      style={{
        marginTop: "40px",
      }}
      className='App'
    >
      <h1>By Clicking on the Fetch Score button will get score</h1>
      <button
        style={{ padding: "10px", fontWeight: "bold" }}
        onClick={getScore}
      >
        Fetch Score
      </button>
      <h2> Total Score:{score}</h2>
      <ul
        style={{ display: "flex", justifyContent: "space-around", gap: "5px" }}
      >
        {noBall.map((e) => {
          return <h3>No-Ball: {e}</h3>;
        })}
      </ul>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "5px",
        }}
      >
        {wicketBall.map((e) => {
          return <h3>Wicket: {e}</h3>;
        })}
      </ul>
    </div>
  );
};

export default App;