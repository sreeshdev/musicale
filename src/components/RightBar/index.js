import React, { useState, useEffect } from "react";
import "./index.scss";
import icon4 from "../../../assets/images/icon4.svg";
import icon6 from "../../../assets/images/icon6.svg";
import icon8 from "../../../assets/images/icon8.svg";

const RightBar = ({ playlist }) => {
  return (
    <div className="rightBar">
      <button className="pro">Free</button>
      <div className="barHeads">
        <div className="creator">{playlist.playlist.creator}</div>
        <div className="loc">{playlist.playlist.location}</div>
      </div>
      <div>
        <div className="fields">
          <div className="iconbg blue">
            <img src={icon4} className="ico" />
          </div>
          <span>Friends</span>
          <span>{playlist.playlist.friends}</span>
        </div>
        <div className="fields">
          <div className="iconbg rose">
            <img src={icon6} className="ico" />
          </div>
          <span>Likes</span>
          <span>{playlist.playlist.likes}</span>
        </div>
        <div className="fields">
          <div className="iconbg green">
            <img src={icon8} className="ico" />
          </div>
          <span>Playlist</span>
          <span>{playlist.playlist.playlist}</span>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
