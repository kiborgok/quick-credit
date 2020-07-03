import React from 'react';

const Dashboard = () => {
    const auth = JSON.parse(localStorage.getItem('jwt'));
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ marginBottom: '2px' }}>{auth ? auth.user === 'Admin' ? `Welcome Admin` : `Welcome ${auth.username}` : `Welcome to Quick credit`}</h1>
            <video style={{ display: 'flex', flexDirection: 'column', width: '100%' }} autoPlay={true} controls>
                <source src='/video/quick-loan-basics.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Dashboard;