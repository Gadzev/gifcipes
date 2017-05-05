import * as ActionTypes from '../actionTypes';

const initialState = {data: [''], shouldGetNext: true};

export const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.TEST_DATA:
            return {
                data: [...state.data],
                shouldGetNext: true,
            }
        case ActionTypes.TEST_DATA_SUCCESS:
            return {
                data: [...state.data, action.payload],
                shouldGetNext: false,
            };
        default:
            return state;
    }
}
