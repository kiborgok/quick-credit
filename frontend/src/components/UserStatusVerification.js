import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../redux/actions/userActions';

const mapStateToProps = ({ errors }) => ({ errors });

const mapDispatchToProps = dispatch => (
    { actions: bindActionCreators(userActions, dispatch) }
);

const UserStatusVerification = ({ actions, history }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        actions.verifyUser()
        history.push('/login')
        setLoading(false)
        localStorage.removeItem('verificationToken');
        localStorage.removeItem('email');
        //window.location.reload()
    }, [actions, history])
    return (
        <>
            {loading ? <h3>loading....</h3> : null}
        </>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserStatusVerification);