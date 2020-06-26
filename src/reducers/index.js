import { combineReducers } from 'redux'
import users from './users'
import { reducer as formReducer } from 'redux-form'
import historicReducer from './historicReducer'
import userReducer from './userReducer'

export default combineReducers({
    users,
    form: formReducer,
    historicReducer,
    userReducer

})