import * as ActionTypes from '../actionTypes';

const initialState = {gifcipeById: null, loading: true};

export const recipe = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_GIFCIPE_BY_ID:
            return {
                loading: true,
            };
        case ActionTypes.GET_GIFCIPE_BY_ID_SUCCESS:
            return {
                gifcipeById: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
