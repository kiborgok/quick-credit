export const loadUsers = ({ token }) => (
    fetch('api/v1/auth/users', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
);

export const loadUser = ({ userId, token }) => (
    fetch(`api/v1/auth/users/user/${userId}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
);

export const verifyUser = ({ email, token }) => (
    fetch(`api/v1/auth/users/user/${email}/verify`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
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



