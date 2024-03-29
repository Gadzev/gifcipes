import * as ActionTypes from '../actionTypes';

export const helloWorldAction = () => ({
    type: ActionTypes.HELLO_WORLD,
});

export const loginAction = payload => ({
    type: ActionTypes.DO_LOGIN,
    payload,
});

export const registerAction = payload => ({
    type: ActionTypes.DO_REGISTER,
    payload,
});

let nextNotificationId = 0;

/**
 * Add notification to the store
 * @param {String} text - text to display
 * @param {String} alertType - Bootstrap alert style: success | info | warning | danger
 */
export const addNotificationAction = ({ text, alertType }) => ({
    type: ActionTypes.ADD_NOTIFICATION,
    payload: {
        id: nextNotificationId++,
        text,
        alertType,
    },
});

/**
 * Remove a notification from the store
 * @param {String} notificationId
 */
export const removeNotificationAction = notificationId => ({
    type: ActionTypes.REMOVE_NOTIFICATION,
    payload: { notificationId },
});

export const getUser = payload => ({
    type: ActionTypes.GET_USER,
    payload,
});

export const updateUser = payload => ({
    type: ActionTypes.UPDATE_USER,
    payload,
});

export const logoutUser = payload => ({
    type: ActionTypes.LOGOUT_USER,
    payload,
});

// gifcipes actions
export const getGifcipe = payload => ({
    type: ActionTypes.GET_GIFCIPE,
    payload,
});

export const getGifcipeById = payload => ({
    type: ActionTypes.GET_GIFCIPE_BY_ID,
    payload,
});
