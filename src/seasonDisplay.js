import React from "react";
import "./seasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Common lets go to beach!",
    iconName: "sun",
  },
  winter: {
    text: "Blurr, it so chilly!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  return (
    <div className={`card ${season}`}>
      <i className={`icon left-icon ${iconName}`} />
      <div>{text}</div>
      <i className={`icon right-icon ${iconName}`} />
    </div>
  );
};

export default SeasonDisplay;
