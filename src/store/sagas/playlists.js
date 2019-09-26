import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistsActions } from "../ducks/playlists";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylists() {
  try {
    const { data: playlists } = yield call(api.get, "/playlists");

    yield put(PlaylistsActions.getPlaylistsSuccess(playlists));
  } catch (error) {
    yield put(ErrorActions.setError("Nao foi possivel obter as playlists"));
  }
}
