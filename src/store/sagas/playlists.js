import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistsActions } from "../ducks/playlists";

export function* getPlaylists() {
  try {
    const { data: playlists } = yield call(api.get, "/playlists");

    yield put(PlaylistsActions.getPlaylistsSuccess(playlists));
  } catch (error) {
    console.log(error);
  }
}
