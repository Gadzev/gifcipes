import * as ActionTypes from '../actionTypes';

const initialState = {data: ['testing'], loadingMore: false};

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TEST_DATA:
            return {
                data: [...state.data],
                loadingMore: true,
            }
        case ActionTypes.TEST_DATA_SUCCESS:
            return {
                data: [...state.data, action.payload],
                loadingMore: false,
            };
        default:
            return state;
    }
}
