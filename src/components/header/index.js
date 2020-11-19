import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LeftArrow from "../../../assets/images/right.svg";
import RightArrow from "../../../assets/images/left.svg";
import NotificationIcon from "../../../assets/images/notification.svg";
import SettingIcon from "../../../assets/images/setting.svg";
import "./index.scss";

import { connect } from "react-redux";
import { store } from "../../_helpers";
import { playlistActions } from "../../_actions";

const Header = ({ history, sidebar }) => {
  // const [rightBar, setRightBar] = useState(false);
  console.log(sidebar);
  return (
    <div>
      <div className="header headerBg">
        <div className="arrows headerBg">
          <img
            src={LeftArrow}
            className="leftArrow arrow-size"
            onClick={() => {
              history.goBack();
            }}
          />
          <img
            src={RightArrow}
            onClick={() => {
              history.goForward();
            }}
            className="arrow-size"
          />
        </div>
        <div className="inputs headerBg">
          <input
            className="inputBox"
            placeholder="Search for tracks, artist or album..."
          />
        </div>
        <div className="RightIcons headerBg">
          <img src={NotificationIcon} className="notification right-size" />
          <img
            src={SettingIcon}
            className="right-size"
            onClick={() => {
              store.dispatch(playlistActions.sideBar(!sidebar));
              store.dispatch(playlistActions.playerBar(false));
            }}
          />
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  console.log(state);
  const list = state.playList;
  return list;
}

export default connect(mapStateToProps)(Header);
