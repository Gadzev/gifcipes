import * as ActionTypes from '../actionTypes';

const initialState = {gifcipe: null, loading: false, next: ''};

export const gifcipes = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_GIFCIPE:
            return {
                loading: true,
            };
        case ActionTypes.GET_GIFCIPE_SUCCESS:
            return {
                gifcipe: action.payload,
                loading: false,
                next: action.payload.data.after,
            };
        default:
            return state;
    }
};
