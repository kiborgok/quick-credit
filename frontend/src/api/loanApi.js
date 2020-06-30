const token = localStorage.getItem('token');
const userId = localStorage.getItem("userId");

export const applyLoan = ({ amount, tenor, userId }) => (
    fetch(`api/v1/loans/${userId}/apply`, {
        method: 'POST',
        body: JSON.stringify({ amount, tenor }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
);

export const repayLoan = ({ repaymentAmount, loanId }) => {
    return fetch(`api/v1/loans/${loanId}/repayment`, {
        method: 'POST',
        body: JSON.stringify({ repaymentAmount }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
};

export const loadLoans = async () => (
    await fetch('api/v1/loans', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
);

export const loadLoan = async () =>
  await fetch(`api/v1/loans/${userId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

export const loadRepaymentHistory = async ({ loanId }) =>
  await fetch(`api/v1/loans/${loanId}/repaymentHistory`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());

export const approveOrRejectLoan = ({ loanId, status }) => (
    fetch(`api/v1/loans/${loanId}`, {
        method: 'POST',
        body: JSON.stringify({ status }),
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
);