import * as userApi from '../../api/userApi';
import * as types from './actionTypes';

export const receiveErrors = error => (
    { type: types.RECEIVE_ERRORS, error: error.error }
);

export const clearErrors = () => (
    { type: types.CLEAR_ERRORS, error: ''}
);

export const signUpUserSuccess = user => (
    { type: types.SIGN_UP_USER_SUCCESS, user: user.data }
);

export const signInUserSuccess = user => (
    { type: types.SIGN_IN_USER_SUCCESS, user: user.data }
);

export const loadUsersSuccess = users => (
    { type: types.LOAD_USERS_SUCCESS, users: users.data }
);

export const loadUserSuccess = user => (
    { type: types.LOAD_USER_SUCCESS, user: user.data }
);

export const verifyUserSuccess = user => (
    { type: types.VERIFY_USER_SUCCESS, user: user.data }
);

export function loadUsers() {
    return function (dispatch) {
        return userApi.loadUsers()
            .then(users => {
                if (users.data) return dispatch(loadUsersSuccess(users))
                return dispatch(receiveErrors(users))
            })
            .catch(error => {
                alert(`Network Error ${error}`)
            })
    };
};

export function loadUser() {
    return function (dispatch) {
        return userApi.loadUser()
            .then(user => {
                if (user.data) {
                    return dispatch(loadUserSuccess(user))
                }
                return dispatch(receiveErrors(user))
            })
            .catch(error => {
                alert(`Network Error ${error}`)
            })
    };
};

export function verifyUser() {
    return function (dispatch) {
        return userApi.verifyUser()
            .then(user => {
                if (user.data) {
                    alert('You have successfully verified your account')
                    localStorage.removeItem('verificationToken')
                    localStorage.removeItem('email')
                    return dispatch(verifyUserSuccess(user))
                }
                alert('There was a problem ' + user.error)
                return dispatch(receiveErrors(user))
            })
            .catch(error => {
                alert(`Network Error ${error}`)
            })
    };
};

export function signup(user) {
    return function (dispatch) {
        return userApi.signup(user)
            .then(user => {
                if (user.data) {
                    localStorage.setItem('verificationToken', user.data.verificationToken);
                    localStorage.setItem('email', user.data.email);
                    alert('Check mail to verify your account')
                    return dispatch(signInUserSuccess(user))
                }
                return dispatch(receiveErrors(user))
            })
            .catch(error => {
                alert(`Network Error ${error}`)
            })
    };
};

export const signin = user => dispatch => userApi.signin(user)
    .then(user => {
        if (user.data) {
            if (user.data.loan[0]) {
                localStorage.setItem('token', user.data.token)
                localStorage.setItem('username', user.data.username)
                localStorage.setItem('userId', user.data.userId)
                localStorage.setItem('user', user.data.admin)
                localStorage.setItem('userStatus', user.data.status)
                localStorage.setItem('loanStatus', user.data.loan[0].status)
                localStorage.setItem('loanId', user.data.loan[0]._id)
                return dispatch(signInUserSuccess(user))
            } else {
                localStorage.setItem('token', user.data.token)
                localStorage.setItem('username', user.data.username)
                localStorage.setItem('userId', user.data.userId)
                localStorage.setItem('user', user.data.admin)
                localStorage.setItem('userStatus', user.data.status)
                localStorage.setItem('loanStatus', 'No loan')
                return dispatch(signInUserSuccess(user))
            }
        }
        return dispatch(receiveErrors(user))
    })
    .catch(error => {
        alert(`Network Error ${error}`)
    })


