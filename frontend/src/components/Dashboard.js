import React from 'react';

const Dashboard = () => {
    const username = localStorage.getItem('username');
    const id = localStorage.getItem('userId');
    const user = localStorage.getItem('user');
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <h1 style={{marginBottom: '2px'}}>{id ? user === 'Admin' ? `Welcome ${user}` : `Welcome ${username}` : `Welcome to Quick credit`}</h1>
            <video height='480' autoPlay={true} controls>
                <source src='/video/quick-loan-basics.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Dashboard;