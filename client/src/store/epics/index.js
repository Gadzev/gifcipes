import {login, register, logoutUser} from './auth';
import {addNotification} from './notifications';
import {helloWorld} from './helloWorld';
import {getUser, updateUser} from './users';
import {getGifcipe} from './gifcipes';

export default [
    login,
    register,
    addNotification,
    helloWorld,
    getUser,
    updateUser,
    logoutUser,
    getGifcipe,
];
