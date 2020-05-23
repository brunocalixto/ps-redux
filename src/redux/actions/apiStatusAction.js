import * as types from "./actionTypes";

export function loadAuthorsSuccess(authors) {
  return { type: types.BEGIN_API_CALL, authors };
}
