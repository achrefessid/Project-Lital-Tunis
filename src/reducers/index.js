import { combineReducers } from 'redux';
import users from './users';
//import { reducer as formReducer } from 'redux-form';
import historicReducer from './historicReducer';
import userReducer from './userReducer';
import currentUser from './currentUser';

const Xreducer = combineReducers({
    users,
    historicReducer,
    currentUser,
    userReducer
    //form: formReducer,
})
export default Xreducer;