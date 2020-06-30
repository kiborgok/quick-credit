import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

const AuthRoute = ({ path, component: Component }) => {
    const loggedIn = localStorage.getItem('user');
    return (
        <Route
            path={path}
            render={props => (
                loggedIn === 'User' || loggedIn === 'Admin' ?
                    <Redirect to='/' /> :
                    <Component {...props} />
            )}
        />
    )
};

export default withRouter(AuthRoute);
