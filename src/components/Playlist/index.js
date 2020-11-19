import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import RightBar from "../RightBar";
import "./index.scss";
import redHeart from "../../../assets/images/heart.svg";
import blackHeart from "../../../assets/images/blackHeart.svg";
import vertical from "../../../assets/images/more-vertical.svg";
import { store } from "../../_helpers";
import { playlistActions } from "../../_actions";
import Player from "../Player";

const Playlist = ({ history, playlists, sidebar, playerbar }) => {
  console.log(playlists);
  if (playlists === null) {
    history.push("/");
  }
  return (
    <div className="Playlist">
      <CSSTransition
        in={sidebar}
        classNames="alert"
        timeout={300}
        unmountOnExit
      >
        <RightBar playlist={playlists} />
      </CSSTransition>
      <div className="playlist-Head">Playlist</div>
      <div className="details">
        <div className="artPad">
          <h5>Radio</h5>
        </div>
        <span>
          <p>Playlist</p>
          <h3 className="play-name">
            {playlists ? playlists.playlist.name : "Heading"}
          </h3>
          <h5 className="author">
            {playlists ? playlists.playlist.creator : "Creator"}
          </h5>
          <div className="buttons">
            <button
              onClick={() => {
                store.dispatch(playlistActions.sideBar(false));
                store.dispatch(playlistActions.playerBar(!playerbar));
              }}
            >
              Play
            </button>
            <img src={redHeart} className="fav" />
            <img src={vertical} />
          </div>
        </span>
      </div>
      {playlists !== null &&
        playlists.playlist.songs.map((data) => {
          return (
            <tr className="list">
              <td className="Sno">{data.id}</td>
              <td>
                <img
                  src={blackHeart}
                  className="songFav"
                  width="22px"
                  height="20px"
                />
              </td>
              <td className="title">{data.title}</td>
              <td className="artist">{data.artist}</td>
              <td className="duration">{data.length}</td>
              <td>
                <img className="more" src={vertical} />
              </td>
            </tr>
          );
        })}
      <CSSTransition
        in={playerbar}
        classNames="alert"
        timeout={300}
        unmountOnExit
      >
        <Player songs={playlists.playlist.songs} />
      </CSSTransition>
    </div>
  );
};
function mapStateToProps(state) {
  console.log(state);
  const list = state.playList;
  return list;
}

export default connect(mapStateToProps)(Playlist);
