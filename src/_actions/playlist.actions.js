import { playlistConstants } from "../_constants";
import { store } from "../_helpers";
export const playlistActions = {
  playList,
  sideBar,
  playerBar,
};

function playList(payload) {
  return { type: playlistConstants.PLAY_LIST, payload };
}

function sideBar(payload) {
  return { type: playlistConstants.SIDE_BAR, payload };
}

function playerBar(payload) {
  return {
    type: playlistConstants.PLAYER_BAR,
    payload,
  };
}
