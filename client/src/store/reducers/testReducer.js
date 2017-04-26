import * as ActionTypes from '../actionTypes';

const initialState = {data: ['testing']};

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TEST_DATA:
            return {
                data: [...state.data, action.payload],
            };
        default:
            return state;
    }
}
