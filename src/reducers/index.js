import { combineReducers } from 'redux'
import users from './users'
import { reducer as formReducer } from 'redux-form'
import historicReducer from './historicReducer'
import userReducer from './userReducer'
import currentUser from "./currentUser"

export default combineReducers({
    users,
    currentUser,
    form: formReducer,
    historicReducer,
    userReducer

})