import React from "react";

const TopRow = props => {
  
  let homeName = 'Lions';
  let awayName = 'Goats';

  return (
    <div className="topRow">
        <div className="home">
        <h2 className="home__name">{homeName}</h2>
        <div className="home__score">{props.scoredata.hScore}</div>
        </div>
        <div className="timer">00:03</div>
        <div className="away">
        <h2 className="away__name">{awayName}</h2>
        <div className="away__score">{props.scoredata.aScore}</div>
        </div>
    </div>
  );
}

export default TopRow;