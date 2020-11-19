import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { store } from "../../_helpers";
import { playlistActions } from "../../_actions";

import "./index.scss";

const MainContent = ({ playlists }) => {
  console.log("@@", playlists);
  const [radio, setRadio] = useState(null);
  const [selectedRadio, setSelected] = useState(null);
  const getJson = () => {
    return fetch(
      "https://musicales3.s3.ap-south-1.amazonaws.com/musicData.json"
    )
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getJson().then((list) => {
      setRadio(list);
    });
  }, []);
  return (
    <div className="mainContent">
      <div className="content-heading">Radio</div>
      <div className="radio-cards-main">
        {radio !== null &&
          radio.Radios.map((data) => {
            return (
              <Link
                to="/playlist"
                className="radio-cards"
                onClick={() => {
                  store.dispatch(playlistActions.playList(data));
                }}
              >
                <div className="cardbg">
                  <h5 className="card-head">Radio</h5>
                </div>
                <h5 className="card-title">{data.name}</h5>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  const list = state.playList;
  return list;
}

export default connect(mapStateToProps)(MainContent);
