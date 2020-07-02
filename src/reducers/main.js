import { combineReducers } from 'redux';
import currentUser from './currentUser';
import users from './users';
import { reducer as formReducer } from 'redux-form';
import historicReducer from './historicReducer';
import userReducer from './userReducer';


const Xreducer = combineReducers({
    currentUser,
    users,
    historicReducer,
    userReducer,
    form: formReducer,
})
export default Xreducer;