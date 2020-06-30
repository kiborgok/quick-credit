import React from 'react';
import { Switch, Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { withRouter } from 'react-router-dom';
import AuthRoute from './auth/AuthRoute'
import ProtectedRoute from './auth/ProtectedRoute'
import Dashboard from './components/Dashboard'
import Signup from './components/Signup';
import UserStatusVerification from './components/UserStatusVerification';
import Login from './components/Login';
import Loan from './components/LoanApplication';
import Profile from './components/Profile';
import LoanPayment from './components/LoanPayment'
import LoanRepaymentHistory from './components/LoanRepaymentHistory';
import LoanApplications from './components/admin/LoanApplications';
import Clients from './components/admin/Clients';
import LoanDetails from './components/LoanDetails';
import Terms from './components/Terms';
import { IoIosLogOut } from "react-icons/io";

function App({ history }) {
  let loggedIn = localStorage.getItem('user');
  let loanStatus = localStorage.getItem('loanStatus');
  let userStatus = localStorage.getItem('userStatus');

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('username')
    localStorage.removeItem('user')
    localStorage.removeItem('loanStatus')
    localStorage.removeItem('userStatus')
    localStorage.removeItem('loanId')
    history.push('/login')
  }
  return (
    <Router>
      <>
        <div className="App">
          <div className="menu-container">
            <div className="menu">
              <div className="logo">Quick Credit</div>
              <div className="links">
                <div className="nav-links login">
                  <NavLink to={"/dashboard"}>Dashboard</NavLink>
                </div>
                {loggedIn === "User" && userStatus === "Verified" && (
                  <div className="nav-links login">
                    <NavLink to={"/loanApplication"}>Loan Application</NavLink>
                  </div>
                )}
                {loanStatus === "Approved" && (
                  <div className="nav-links login">
                    <NavLink to={"/loanPayment"}>Loan Payment</NavLink>
                  </div>
                )}
                {loggedIn === "User" ||
                loggedIn === "Admin" ? null : (
                  <div className="nav-links login">
                    <NavLink to={"/signup"} className="signup login">
                      SignUp
                    </NavLink>
                  </div>
                )}
                {loggedIn === "Admin" && (
                  <div className="nav-links login">
                    <NavLink to={"/clients"}>Clients</NavLink>
                  </div>
                )}
                {loggedIn === "Admin" && (
                  <div className="nav-links login">
                    <NavLink to={"/loanApplications"}>
                      Loan Applications
                    </NavLink>
                  </div>
                )}
                {loggedIn ? (
                  loggedIn === "User" ? (
                    <li
                      className="dropdown nav-links"
                      style={{ paddingLeft: "20px", backgroundImage: "none" }}
                    >
                      <span>Account &#9662;</span>
                      <ul className="features-menu">
                        {loggedIn === "User" && (
                            <li>
                              <NavLink to={"/profile"}>Profile</NavLink>
                            </li>
                          )}
                        {loggedIn === "User" && (
                            <li>
                              <NavLink to={"/loanDetails"}>Loans</NavLink>
                            </li>
                          )}
                        {loggedIn === "User" &&
                          loanStatus === "Approved" && (
                            <li>
                              <NavLink to={"/loanRepaymentHistory"}>
                                History
                              </NavLink>
                            </li>
                          )}
                        <li>
                          <IoIosLogOut
                            style={{ cursor: "pointer" }}
                            size={24}
                            onClick={logout}
                          />
                        </li>
                      </ul>
                    </li>
                  ) : (
                    <div
                      style={{ backgroundImage: "none" }}
                      className="nav-links login"
                    >
                      <IoIosLogOut
                        style={{ cursor: "pointer" }}
                        size={24}
                        onClick={logout}
                      />
                    </div>
                  )
                ) : (
                  <div className="nav-links login">
                    <NavLink to={"/login"}>SignIn</NavLink>
                  </div>
                  )}
                <div className="nav-links login">
                  <NavLink to={"/terms"}>
                    Terms of Service
                    </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-container">
            <Switch>
              <Route path={["/dashboard", "/"]} exact component={Dashboard} />
              <Route path="/verify" component={UserStatusVerification} />
              <Route path="/terms" component={Terms} />
              <AuthRoute path="/signup" component={Signup} />
              <AuthRoute path="/login" component={Login} />
              <ProtectedRoute path="/loanApplication" component={Loan} />
              <ProtectedRoute path="/profile" component={Profile} />
              <ProtectedRoute path="/loanDetails" component={LoanDetails} />
              <ProtectedRoute path="/loanPayment" component={LoanPayment} />
              <ProtectedRoute
                path="/loanRepaymentHistory"
                component={LoanRepaymentHistory}
              />
              <ProtectedRoute path="/clients" component={Clients} />
              <ProtectedRoute
                path="/loanApplications"
                component={LoanApplications}
              />
            </Switch>
          </div>
        </div>
        <div className="footer-container">
          <div className="footer">
            <p>&copy;Copyright 2020</p>
          </div>
        </div>
      </>
    </Router>
  );
}

export default withRouter(App);
