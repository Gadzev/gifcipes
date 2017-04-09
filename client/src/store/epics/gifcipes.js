import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';

export const getGifcipe = action$ => action$
  .ofType(ActionTypes.GET_GIFCIPE)
  .switchMap(() => Observable
    .ajax.get('https://www.reddit.com/r/gifrecipes/.json?')
    .map(res => res.response)
    .mergeMap(response => Observable.of(
      {
        type: ActionTypes.GET_GIFCIPE_SUCCESS,
        payload: response,
      },
    )));

 export const getGifcipeById = action$ => action$
  .ofType(ActionTypes.GET_GIFCIPE_BY_ID)
  .switchMap(({payload}) => Observable
  .ajax.get(`https://www.reddit.com/by_id/${payload}.json`)
  .map(res => res.response)
  .mergeMap(response => Observable.of(
    {
      type: ActionTypes.GET_GIFCIPE_BY_ID_SUCCESS,
      payload: response,
    },
  )));
