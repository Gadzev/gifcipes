import * as ActionTypes from '../actionTypes';

const initialState = {gifcipe: null, loading: true};

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
            };
        default:
            return state;
    }
};
