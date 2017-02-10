import * as ActionTypes from '../actionTypes';

const initialState = {user: null, status: 'Initiated'};

export const users = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_USER:
            return {
                user: null,
                status: 'loading...',
            };
        case ActionTypes.GET_USER_SUCCESS:
            return {
                user: action.payload.user,
                status: 'done',
            };
        case ActionTypes.GET_USER_ERROR:
            return {
                ...state,
                status: 'error',
                error: action.payload.error,
            };
        default:
            return state;
    }
};
