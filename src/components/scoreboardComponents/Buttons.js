import React from "react";



const Buttons = props => {

  const givePoints = e =>{
    // fieldgoal? 3points : 7points;
    let points = e.target.innerText.includes('Field') ? 3 : 7 ;
    //innerHTML includes "Home"  ? increase home score!     else: increase away score!
    e.target.innerText.includes('Goats') ? props.scoredata.setAScore(props.scoredata.aScore + points) : props.scoredata.setHScore(props.scoredata.hScore + points);
  };

  const changeQuarter = e =>{ 
    console.log(props.scoredata.quarter)
    return props.scoredata.quarter > 3 ? props.scoredata.setQuarter(1) : props.scoredata.setQuarter(props.scoredata.quarter + 1); 
  };
  
  return (
    <section className="buttons">
    <div className="homeButtons">
        <button onClick = {givePoints} className="homeButtons__touchdown">Goats Touchdown</button>
        <button onClick = {givePoints} className="homeButtons__fieldGoal">Goats Field Goal</button>
    </div>
    <div className="awayButtons">
        <button onClick = {givePoints} className="awayButtons__touchdown">Lions Touchdown</button>
        <button onClick = {givePoints} className="awayButtons__fieldGoal">Lions Field Goal</button>
    </div>
    <div className="awayButtons">
        <button onClick = {changeQuarter} className="awayButtons__touchdown">Quarter</button>
    </div>
    </section>
  );
}

export default Buttons;