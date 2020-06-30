const token = localStorage.getItem('token');
const id = localStorage.getItem('userId');

export const loadUsers = () => (
    fetch('api/v1/auth/users', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
);

export const loadUser = () => (
    fetch(`api/v1/auth/users/${id}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
);

export const verifyUser = () => (
    fetch(`api/v1/auth/users/${localStorage.getItem('email')}/verify`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('verificationToken')}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
);

export const signup = (user) => (
    fetch('api/v1/auth/signup', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
);

export const signin = user => (
    fetch('api/v1/auth/signin', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
);



