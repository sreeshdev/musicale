import React, { useState, useEffect } from "react";
import "./index.scss";
import prev from "../../../assets/images/prev.svg";
import next from "../../../assets/images/next.svg";
import suffle from "../../../assets/images/suffle.svg";
import repeat from "../../../assets/images/repeat.svg";

const Player = ({ songs }) => {
  //   console.log(songs);
  const [position, setPosition] = useState(0);
  const [status, setStatus] = useState("Play");
  return (
    <div className="player">
      <div className="nowPlaying">
        <h4>{songs[position].title}</h4>
        <h6>{songs[position].artist}</h6>
      </div>
      <div className="media-buttons">
        <img src={next} className="media-icon" />
        <img
          src={suffle}
          onClick={() => {
            console.log(songs.length);
            position === 0
              ? setPosition(songs.length - 1)
              : setPosition(position - 1);
          }}
          className="media-icon"
        />
        <div
          className="play"
          onClick={() =>
            status === "Play" ? setStatus("Pause") : setStatus("Play")
          }
        >
          {status}
        </div>
        <img
          src={prev}
          onClick={() => {
            console.log("#", position, songs.length);
            position < songs.length - 1
              ? setPosition(position + 1)
              : setPosition(0);
          }}
          className="media-icon"
        />
        <img src={repeat} className="media-icon" />
      </div>
      <div className="durationBar">
        <h6>0:00</h6>
        <hr className="bar"></hr>
        <h6>{songs[position].length}</h6>
      </div>
      {position < songs.length - 1 ? (
        <div className="upNext">
          <h3>Up Next</h3>
          <h5>{songs[position + 1].title}</h5>
        </div>
      ) : (
        <div className="upNext">
          <h3>End Of List</h3>
        </div>
      )}
    </div>
  );
};

export default Player;
