import React, { useState, useEffect } from "react";
import "./index.scss";
import Logo from "../../../assets/images/Logo.svg";
import icon1 from "../../../assets/images/icon1.svg";
import icon2 from "../../../assets/images/icon2.svg";
import icon3 from "../../../assets/images/icon3.svg";
import icon4 from "../../../assets/images/icon4.svg";
import icon5 from "../../../assets/images/icon5.svg";
import icon6 from "../../../assets/images/icon6.svg";
import icon7 from "../../../assets/images/icon7.svg";
import icon8 from "../../../assets/images/icon8.svg";
import icon9 from "../../../assets/images/icon9.svg";
import circle from "../../../assets/images/circle.svg";

const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="MainLogo">
        <img src={Logo} className="lg" />
      </div>
      <div className="MainSet">
        <div className="indiv">
          <img src={icon1} className="icon" />
          <span className="headings">Home</span>
        </div>
        <div className="indiv">
          <img src={icon2} className="icon" />
          <span className="headings">Browse</span>
        </div>
        <div className="indiv">
          <img src={icon3} className="icon" />
          <span className="headings">Radio</span>
        </div>
        <div className="indiv">
          <img src={icon4} className="icon" />
          <span className="headings">Artist</span>
        </div>
        <div className="indiv">
          <img src={icon8} className="icon" />
          <span className="headings">Albums</span>
        </div>
      </div>
      <div className="myMusic">
        <div className="sidehead">
          <span className="Mainheading">My Music</span>
        </div>
        <div className="indiv">
          <img src={icon5} className="icon" />
          <span className="headings">Recently Played</span>
        </div>
        <div className="indiv">
          <img src={icon6} className="icon" />
          <span className="headings">Favorite</span>
        </div>
        <div className="indiv">
          <img src={icon7} className="icon" />
          <span className="headings">Download</span>
        </div>
      </div>
      <div className="playlist">
        <div className="sidehead">
          <span className="Mainheading">Playlist</span>
        </div>
        <div className="indiv">
          <img src={icon8} className="icon" />
          <span className="headings">Workout</span>
        </div>
        <div className="indiv">
          <img src={icon8} className="icon" />
          <span className="headings">Yoga</span>
        </div>
        <div className="indiv">
          <img src={icon9} className="icon" />
          <span className="headings">Commute</span>
        </div>
      </div>
      <div className="addPlaylist">
        <div className="indiv1">
          <img src={circle} className="icon1" />
          <span className="playlist">Add New Playlist</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
