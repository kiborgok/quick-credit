import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

const ProtectedRoute = ({ path, component: Component }) => {
    const loggedIn = localStorage.getItem('user');
    return (
        <Route
            path={path}
            render={props => (
                loggedIn === 'Admin' || loggedIn === 'User' ?
                    <Component {...props} /> :
                    <Redirect to='/login' />
            )}
        />
    )
};

export default withRouter(ProtectedRoute);