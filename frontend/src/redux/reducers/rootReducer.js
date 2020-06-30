import { combineReducers } from 'redux';
import users from './userReducer';
import loans from './loanReducer';
import errors from './errorReducer';
import loanHistory from './loanHistoryReducer';

const rootReducer = combineReducers({
    users,
    loans,
    loanHistory,
    errors
});

export default rootReducer;