import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
  try {
    const { data: playlist } = yield call(
      api.get,
      `/playlist/${action.payload.id}`
    );

    const { data: songs } = yield call(api.get, `/songs/${action.payload.id}`);

    yield put(
      PlaylistDetailsActions.getPlaylistDetailsSuccess({ ...playlist, songs })
    );
  } catch (error) {
    yield put(
      ErrorActions.setError("Nao foi possivel obter os detalhes da playlist")
    );
  }
}
