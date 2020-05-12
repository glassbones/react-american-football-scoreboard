import React, {useState} from "react";
import TopRow from "./scoreboardComponents/TopRow";
import BottomRow from "./scoreboardComponents/BottomRow";
import "./scoreboard.css";
import Buttons from "./scoreboardComponents/Buttons";

function ScoreBoard() {

  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);
  let [quarterValue, setQuaterValue] = useState(1);  
  
  const scoredata = {  
  hScore: homeScore, setHScore: setHomeScore, 
  aScore: awayScore, setAScore: setAwayScore,
  quarter: quarterValue, setQuarter: setQuaterValue
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow scoredata={scoredata}/>
        <BottomRow scoredata={scoredata}/>
      </section>
        <Buttons scoredata={scoredata}/>
    </div>
  );
}

export default ScoreBoard;