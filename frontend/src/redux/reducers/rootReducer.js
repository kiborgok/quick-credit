import { combineReducers } from 'redux';
import users from './userReducer';
import loans from './loanReducer';
import errors from './errorReducer';
import history from './loanHistoryReducer';

const rootReducer = combineReducers({
    users,
    loans,
    history,
    errors
});

export default rootReducer;