import * as ActionTypes from '../actionTypes';

const initialState = {gifcipe: null};

export const gifcipes = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_GIFCIPE_SUCCESS:
            return {
                gifcipe: action.payload,
                click: true,
            };
        default:
            return state;
    }
};
