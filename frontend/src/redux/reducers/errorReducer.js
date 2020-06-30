import * as types from '../actions/actionTypes';
import initialState from './initialState';

const errorReducer = (state = initialState.errors, action) => {
    switch (action.type) {
        case types.RECEIVE_ERRORS:
            return action.error
        default:
            return state;
    }
}

export default errorReducer;