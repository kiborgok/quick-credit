import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as loanActions from '../redux/actions/loanActions';

const mapStateToProps = ({ errors, loanHistory }) => ({ errors, loanHistory });
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(loanActions, dispatch)
});

const LoanRepaymentHistory = ({ actions, errors, loanHistory }) => {
    const id = localStorage.getItem('loanId')
  const [showError, setShowError] = useState(false);
    useEffect(() => {
      const loanId = actions.loadHistory({ loanId: id })
      setShowError(false)
      return () => loanId
    }, [actions, id]);

    return (
      <>
        <div className="data-form" style={{ width: "57%" }}>
          <header>
            <h1>Repayment History</h1>
          </header>
          <div className='error'>{showError && errors}</div>
          {loanHistory.length === 0 ? 'You have no loan repayment history' : (
          <>
          {loanHistory.map((history) => (
            <div
              key={history._id}
              style={{
                display: "flex",
                alignSelf: "center",
                width: "40%",
                flexDirection: "column",
                marginTop: "20px",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0px 2px 10px 0px #185a9d",
              }}
            >
              <p>
                <em style={{ fontWeight: "bold" }}>Repayment Amount:</em>{" "}
                {"ksh. " + history.repaymentAmount}
              </p>
              <p>
                <em style={{ fontWeight: "bold" }}>Date:</em>{" "}
                {history.createdAt}
              </p>
              <p>
                <em style={{ fontWeight: "bold" }}>Loan Balance:</em>{" "}
                {"ksh. " + history.loanBalance}
              </p>
            </div>
          ))}</>)}
        </div>
      </>
    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoanRepaymentHistory));