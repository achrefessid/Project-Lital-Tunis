import * as types from '../types';

const currentUser = (state = "none", action) => {
    console.log("current  user in reducer 1: ", state);

    if (action.type === types.LOGIN_USER) {
        return action.userPost

    } else if (action.type === types.LOGOUT_USER) {
        console.log("current logout user in reducer 2: ", action.userPost);
        return action.userPost

    } else {
        console.log("current user in reducer 3: ", state);
        return state
    }
}

export default currentUser;