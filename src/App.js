
import React, {useState} from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  let homeName = 'Lions';
  let awayName = 'Goats';

  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);

  const givePoints = e => {
    // fieldgoal? 3points : 6points;
    let points = e.target.innerText.includes('Field') ? 3 : 7 ;
    //innerHTML includes "Home"  ? increase home score!     else: increase away score!
    e.target.innerText.includes('Home') ? setHomeScore(homeScore + points) : setAwayScore(awayScore + points);
  };
  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{homeName}</h2>
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{awayName}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick = {givePoints} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {givePoints} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {givePoints} className="awayButtons__touchdown">Lions Touchdown</button>
          <button onClick = {givePoints} className="awayButtons__fieldGoal">Lions Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
