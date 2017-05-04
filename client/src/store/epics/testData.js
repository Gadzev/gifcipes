import {Observable} from 'rxjs/Observable';
import * as ActionTypes from '../actionTypes';

export const testData = action$ => action$
    .ofType(ActionTypes.TEST_DATA)
    .mergeMap(({payload}) => Observable
            .timer(400)
            .map(() => ({
                type: ActionTypes.TEST_DATA_SUCCESS,
                payload: payload,
            })),
        );
