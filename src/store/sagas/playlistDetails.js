import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
  try {
    const { data: playlist } = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs `
    );

    yield put(PlaylistDetailsActions.getPlaylistDetailsSuccess(playlist));
  } catch (error) {
    yield put(
      ErrorActions.setError("Nao foi possivel obter os detalhes da playlist")
    );
  }
}
