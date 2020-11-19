import { playlistConstants } from "../_constants";

export function playList(
  state = { playlists: null, sidebar: false, playerbar: false },
  action
) {
  switch (action.type) {
    case playlistConstants.PLAY_LIST:
      return {
        ...state,
        playlists: action.payload,
      };
    case playlistConstants.SIDE_BAR:
      return {
        ...state,
        sidebar: action.payload,
      };
    case playlistConstants.SIDE_BAR:
      return {
        ...state,
        sidebar: action.payload,
      };
    case playlistConstants.PLAYER_BAR:
      return {
        ...state,
        playerbar: action.payload,
      };
    default:
      return state;
  }
}
