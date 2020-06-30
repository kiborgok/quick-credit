import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as loanActions from '../redux/actions/loanActions';

const mapStateToProps = ({ errors }) => ({ errors });
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(loanActions, dispatch)
});

const LoanPayment = ({ actions, errors, history }) => {
  const [showError, setShowError] = useState(false);
    const [amount, setAmount] = useState(50);
    const id = localStorage.getItem('loanId')

    const handleChange = e => {
        setAmount(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
      const pay = async () => {
        const payment = await actions.repayLoan({ repaymentAmount: amount, loanId: id })
        if (payment.loan) {
          history.push('/loanRepaymentHistory')
          return window.location.reload();
        }
        setShowError(true)
      }
      pay();
    }
    return (
      <>
        <div className="loan-form">
          <header>
            <h1>Repay loan</h1>
          </header>
          <div className='error'>{showError && errors}</div>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                min="50"
                max="55000"
                id="amount"
                name="amount"
                value={amount}
                onChange={handleChange}
              />
              <output>{"ksh. " + amount}</output>
            </div>
            <div className="form-row">
              <button>Repay</button>
            </div>
          </form>
        </div>
      </>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoanPayment));