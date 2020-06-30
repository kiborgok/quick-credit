(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{82:function(e,t,a){e.exports=a(99)},87:function(e,t,a){},88:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"receiveErrors",(function(){return w})),a.d(n,"signUpUserSuccess",(function(){return j})),a.d(n,"signInUserSuccess",(function(){return I})),a.d(n,"loadUsersSuccess",(function(){return x})),a.d(n,"loadUserSuccess",(function(){return A})),a.d(n,"verifyUserSuccess",(function(){return C})),a.d(n,"loadUsers",(function(){return R})),a.d(n,"loadUser",(function(){return k})),a.d(n,"verifyUser",(function(){return _})),a.d(n,"signup",(function(){return L})),a.d(n,"signin",(function(){return T}));var r={};a.r(r),a.d(r,"receiveErrors",(function(){return V})),a.d(r,"createLoan",(function(){return z})),a.d(r,"repayLoanSuccess",(function(){return J})),a.d(r,"loadLoansSuccess",(function(){return G})),a.d(r,"loadLoanSuccess",(function(){return Q})),a.d(r,"loadLoanHistorySuccess",(function(){return $})),a.d(r,"approveOrReject",(function(){return X})),a.d(r,"applyLoan",(function(){return Z})),a.d(r,"repayLoan",(function(){return K})),a.d(r,"loadLoans",(function(){return ee})),a.d(r,"loadLoan",(function(){return te})),a.d(r,"loadHistory",(function(){return ae})),a.d(r,"approveOrRejectLoan",(function(){return ne}));var o=a(0),l=a.n(o),c=a(54),s=a.n(c),i=(a(87),a(2)),u=a(6),m=(a(88),Object(u.g)((function(e){var t=e.path,a=e.component,n=localStorage.getItem("user");return l.a.createElement(u.b,{path:t,render:function(e){return"User"===n||"Admin"===n?l.a.createElement(u.a,{to:"/"}):l.a.createElement(a,e)}})}))),d=Object(u.g)((function(e){var t=e.path,a=e.component,n=localStorage.getItem("user");return l.a.createElement(u.b,{path:t,render:function(e){return"Admin"===n||"User"===n?l.a.createElement(a,e):l.a.createElement(u.a,{to:"/login"})}})})),p=function(){var e=localStorage.getItem("username"),t=localStorage.getItem("userId"),a=localStorage.getItem("user");return l.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},l.a.createElement("h1",{style:{marginBottom:"2px"}},t?"Welcome ".concat("Admin"===a?a:e):"Welcome to Quick credit"),l.a.createElement("video",{height:"480",autoPlay:!0,controls:!0},l.a.createElement("source",{src:"/video/quick-loan-basics.mp4",type:"video/mp4"}),"Your browser does not support the video tag."))},E=a(11),f=a.n(E),h=a(22),g=a(7),b=a(64),v=a(18),y=a(5),S=a(3),O=localStorage.getItem("token"),N=localStorage.getItem("userId"),w=function(e){return{type:"RECEIVE_ERRORS",error:e.error}},j=function(e){return{type:"SIGN_UP_USER_SUCCESS",user:e.data}},I=function(e){return{type:"SIGN_IN_USER_SUCCESS",user:e.data}},x=function(e){return{type:"LOAD_USERS_SUCCESS",users:e.data}},A=function(e){return{type:"LOAD_USER_SUCCESS",user:e.data}},C=function(e){return{type:"VERIFY_USER_SUCCESS",user:e.data}};function R(){return function(e){return fetch("api/v1/auth/users",{method:"GET",headers:{Authorization:"Bearer ".concat(O)}}).then((function(e){return e.json()})).then((function(t){return t.data?e(x(t)):e(w(t))}))}}function k(){return function(e){return fetch("api/v1/auth/users/".concat(N),{method:"GET",headers:{Authorization:"Bearer ".concat(O)}}).then((function(e){return e.json()})).then((function(t){return t.data?e(A(t)):e(w(t))}))}}function _(){return function(e){return fetch("api/v1/auth/users/".concat(localStorage.getItem("email"),"/verify"),{method:"POST",headers:{Authorization:"Bearer ".concat(localStorage.getItem("verificationToken")),"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return t.data?(alert("You have successfully verified your account"),e(C(t))):(alert("There was a problem: "+t.error),e(w(t)))}))}}function L(e){return function(t){return function(e){return fetch("api/v1/auth/signup",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(e).then((function(e){return e.data?(localStorage.setItem("verificationToken",e.data.verificationToken),localStorage.setItem("email",e.data.email),alert("Check mail to verify your account"),t(I(e))):t(w(e))}))}}var T=function(e){return function(t){return function(e){return fetch("api/v1/auth/signin",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(e).then((function(e){return e.data?e.data.loan[0]?(localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.username),localStorage.setItem("userId",e.data.userId),localStorage.setItem("user",e.data.admin),localStorage.setItem("userStatus",e.data.status),localStorage.setItem("loanStatus",e.data.loan[0].status),localStorage.setItem("loanId",e.data.loan[0]._id),t(I(e))):(localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.username),localStorage.setItem("userId",e.data.userId),localStorage.setItem("user",e.data.admin),localStorage.setItem("userStatus",e.data.status),localStorage.setItem("loanStatus","No loan"),t(I(e))):t(w(e))}))}},U=Object(y.b)((function(e){return{errors:e.errors}}),(function(e){return{actions:Object(S.b)(n,e)}}))((function(e){var t=e.errors,a=e.actions,n=e.history,r=Object(o.useState)(!1),c=Object(g.a)(r,2),s=c[0],u=c[1],m=Object(b.a)({initialValues:{firstName:"",secondName:"",username:"",email:"",password:"",passwordConfirmation:""},validationSchema:v.a({firstName:v.c().min(2,"Must be 2 characters or more").max(15,"Must be 15 characters or less").required("Required"),secondName:v.c().min(2,"Must be 2 characters or more").max(15,"Must be 15 characters or less").required("Required"),username:v.c().min(2,"Must be 2 characters or more").max(15,"Must be 15 characters or less").required("Required"),email:v.c().email("Invalid email address").required("Required"),password:v.c().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"Must be 6-16 characters, one capital letter, one lowercase letter, one digit and one special character").required("Required"),passwordConfirmation:v.c().oneOf([v.b("password"),null],"Passwords must match").required("Required")}),onSubmit:function(e){var t={firstName:e.firstName,secondName:e.secondName,username:e.username,email:e.email,password:e.password};(function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.signup(t);case 2:if(!e.sent.user){e.next=5;break}return e.abrupt("return",n.push("/login"));case 5:u(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}});return l.a.createElement("div",{className:"signup-form"},l.a.createElement("header",null,l.a.createElement("h1",null,"Sign Up")),l.a.createElement("div",{className:"error"},s&&t),l.a.createElement("form",{onSubmit:m.handleSubmit},l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",Object.assign({name:"firstName",type:"text"},m.getFieldProps("firstName"))),m.touched.firstName&&m.errors.firstName?l.a.createElement("div",{className:"error"},m.errors.firstName):null),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"secondName"},"Second Name"),l.a.createElement("input",Object.assign({name:"secondName",type:"text"},m.getFieldProps("secondName"))),m.touched.secondName&&m.errors.secondName?l.a.createElement("div",{className:"error"},m.errors.secondName):null),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",Object.assign({name:"username",type:"text"},m.getFieldProps("username"))),m.touched.username&&m.errors.username?l.a.createElement("div",{className:"error"},m.errors.username):null),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",Object.assign({name:"email",type:"email"},m.getFieldProps("email"))),m.touched.email&&m.errors.email?l.a.createElement("div",{className:"error"},m.errors.email):null),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",Object.assign({name:"password",type:"password"},m.getFieldProps("password"))),m.touched.password&&m.errors.password?l.a.createElement("div",{className:"error"},m.errors.password):null),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"passwordConfirmation"},"Password-Confirmation"),l.a.createElement("input",Object.assign({name:"passwordConfirmation",type:"password"},m.getFieldProps("passwordConfirmation"))),m.touched.passwordConfirmation&&m.errors.passwordConfirmation?l.a.createElement("div",{className:"error"},m.errors.passwordConfirmation):null),l.a.createElement("div",{className:"form-row"},l.a.createElement("button",{type:"submit"},"Sign Up"),l.a.createElement("p",{style:{padding:"4px",marginLeft:"3px"}},"Already have an account"," ",l.a.createElement(i.b,{style:{textDecoration:"none"},to:"/login"},"Login")))))})),F=Object(y.b)((function(e){return{errors:e.errors}}),(function(e){return{actions:Object(S.b)(n,e)}}))((function(e){var t=e.actions,a=e.history,n=Object(o.useState)(!1),r=Object(g.a)(n,2),c=r[0],s=r[1];return Object(o.useEffect)((function(){s(!0),t.verifyUser(),a.push("/login"),s(!1),localStorage.removeItem("verificationToken"),localStorage.removeItem("email")}),[t,a]),l.a.createElement(l.a.Fragment,null,c?l.a.createElement("h3",null,"loading...."):null)})),P=Object(u.g)(Object(y.b)((function(e){return{errors:e.errors}}),(function(e){return{actions:Object(S.b)(n,e)}}))((function(e){var t=e.actions,a=e.errors,n=e.history,r=Object(o.useState)(!1),c=Object(g.a)(r,2),s=c[0],u=c[1],m=Object(b.a)({initialValues:{email:"",password:""},validationSchema:v.a({email:v.c().email("Invalid email address").required("Required"),password:v.c().required("Required")}),onSubmit:function(e){var a={email:e.email,password:e.password};(function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.signin(a);case 2:if(!e.sent.user){e.next=6;break}return n.push("/"),e.abrupt("return",window.location.reload());case 6:u(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}});return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"login-form"},l.a.createElement("header",null,l.a.createElement("h1",null,"Sign In")),l.a.createElement("div",{className:"error"},s&&a),l.a.createElement("form",{onSubmit:m.handleSubmit,noValidate:!0},l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",Object.assign({name:"email",type:"email"},m.getFieldProps("email"))),m.touched.email&&m.errors.email?l.a.createElement("div",{className:"error"},m.errors.email):null),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",Object.assign({name:"password",type:"password"},m.getFieldProps("password"))),m.touched.password&&m.errors.password?l.a.createElement("div",{className:"error"},m.errors.password):null),l.a.createElement("div",{className:"form-row"},l.a.createElement("button",{type:"submit"},"Sign In"),l.a.createElement("p",{style:{padding:"4px",marginLeft:"3px"}},"Don't have an account"," ",l.a.createElement(i.b,{style:{textDecoration:"none"},to:"/signup"},"Signup"))))))}))),W=a(63),D=a(27),H=localStorage.getItem("token"),q=localStorage.getItem("userId"),B=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/loans",{method:"GET",headers:{Authorization:"Bearer ".concat(H)}}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/loans/".concat(q),{method:"GET",headers:{Authorization:"Bearer ".concat(H)}}).then((function(e){return e.json()}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(h.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.loanId,e.next=3,fetch("api/v1/loans/".concat(a,"/repaymentHistory"),{method:"GET",headers:{Authorization:"Bearer ".concat(H)}}).then((function(e){return e.json()}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(e){return{type:"RECEIVE_ERRORS",error:e.error}},z=function(e){return{type:"CREATE_LOAN",loan:e.data}},J=function(e){return{type:"REPAY_LOAN",loan:e.data}},G=function(e){return{type:"LOAD_LOANS_SUCCESS",loans:e.data}},Q=function(e){return{type:"LOAD_LOAN_SUCCESS",loan:e.data}},$=function(e){return{type:"LOAD_REPAYMENT_HISTORY",loanHistory:e.data}},X=function(e){return{type:"APPROVE_OR_REJECT_LOAN",loan:e.data}};function Z(e){return function(t){return function(e){var t=e.amount,a=e.tenor,n=e.userId;return fetch("api/v1/loans/".concat(n,"/apply"),{method:"POST",body:JSON.stringify({amount:t,tenor:a}),headers:{Authorization:"Bearer ".concat(H),"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(e).then((function(e){return e.data?(alert("Your loan is being processed"),t(z(e))):t(V(e))}))}}function K(e){return function(t){return function(e){var t=e.repaymentAmount,a=e.loanId;return fetch("api/v1/loans/".concat(a,"/repayment"),{method:"POST",body:JSON.stringify({repaymentAmount:t}),headers:{Authorization:"Bearer ".concat(H),"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(e).then((function(e){return e.data?(alert("You have repaid ksh. ".concat(e.data.repaymentAmount)),t(J(e))):t(V(e))}))}}function ee(){return function(e){return B().then((function(t){return e(G(t))}))}}function te(){return function(e){return Y().then((function(t){return e(Q(t))}))}}function ae(e){return function(t){return M(e).then((function(e){return t($(e))}))}}function ne(e){return function(t){return function(e){var t=e.loanId,a=e.status;return fetch("api/v1/loans/".concat(t),{method:"POST",body:JSON.stringify({status:a}),headers:{Authorization:"Bearer ".concat(H),"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(e).then((function(e){return t(X(e))}))}}var re=Object(u.g)(Object(y.b)((function(e){return{errors:e.errors}}),(function(e){return{actions:Object(S.b)(r,e)}}))((function(e){var t=e.errors,a=e.actions,n=e.history,r=Object(o.useState)({amount:500,tenor:1}),c=Object(g.a)(r,2),s=c[0],i=c[1],u=Object(o.useState)(!1),m=Object(g.a)(u,2),d=m[0],p=m[1],E=function(e){var t=e.target,a=t.name,n=t.value;i(Object(D.a)(Object(D.a)({},s),{},Object(W.a)({},a,n)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"loan-form"},l.a.createElement("header",null,l.a.createElement("h1",null,"Apply for a loan")),l.a.createElement("div",{className:"error"},d&&t),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=localStorage.getItem("userId"),r={amount:s.amount,tenor:s.tenor,userId:t};(function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.applyLoan(r);case 2:if(!e.sent.loan){e.next=6;break}return n.push("/loanDetails"),e.abrupt("return",window.location.reload());case 6:p(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"amount"},"Amount"),l.a.createElement("input",{type:"range",min:"500",max:"50000",step:"500",id:"amount",name:"amount",value:s.amount,onChange:E}),l.a.createElement("output",null,"ksh. "+s.amount)),l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"tenor"},"Period In Months"),l.a.createElement("select",{as:"select",id:"tenor",name:"tenor",value:s.tenor,onChange:E},l.a.createElement("option",{value:1},"1"),l.a.createElement("option",{value:3},"3"),l.a.createElement("option",{value:6},"6"),l.a.createElement("option",{value:9},"9"),l.a.createElement("option",{value:12},"12"))),l.a.createElement("div",{className:"form-row"},l.a.createElement("button",null,"Request")))))}))),oe=Object(u.g)(Object(y.b)((function(e){return{errors:e.errors,users:e.users}}),(function(e){return{actions:Object(S.b)(n,e)}}))((function(e){var t=e.actions,a=e.users,n=e.errors,r=Object(o.useState)(!1),c=Object(g.a)(r,2),s=c[0],i=c[1];return Object(o.useEffect)((function(){var e=t.loadUser();return function(){return e}}),[t]),Object(o.useEffect)((function(){return i(!1)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"data-form",style:{width:"57%"}},l.a.createElement("header",null,l.a.createElement("h1",null,"Account Details")),l.a.createElement("p",{className:"error"},s&&n),0===a.length?"Loading":l.a.createElement(l.a.Fragment,null,a.map((function(e){return l.a.createElement("div",{key:e._id,style:{display:"flex",alignSelf:"center",width:"40%",flexDirection:"column",marginTop:"20px",borderRadius:"8px",padding:"15px",boxShadow:"0px 2px 10px 0px #185a9d"}},l.a.createElement("p",{style:{padding:"5px"}},l.a.createElement("em",{style:{fontWeight:"bold"}},"First Name: ")," ",e.firstName),l.a.createElement("p",{style:{padding:"5px"}},l.a.createElement("em",{style:{fontWeight:"bold"}},"Second Name:")," ",e.secondName),l.a.createElement("p",{style:{padding:"5px"}},l.a.createElement("em",{style:{fontWeight:"bold"}},"Email:")," ",e.email))})))))}))),le=Object(u.g)(Object(y.b)((function(e){return{errors:e.errors}}),(function(e){return{actions:Object(S.b)(r,e)}}))((function(e){var t=e.actions,a=e.errors,n=e.history,r=Object(o.useState)(!1),c=Object(g.a)(r,2),s=c[0],i=c[1],u=Object(o.useState)(50),m=Object(g.a)(u,2),d=m[0],p=m[1],E=localStorage.getItem("loanId");return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"loan-form"},l.a.createElement("header",null,l.a.createElement("h1",null,"Repay loan")),l.a.createElement("div",{className:"error"},s&&a),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(){var e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.repayLoan({repaymentAmount:d,loanId:E});case 2:if(!e.sent.loan){e.next=6;break}return n.push("/loanRepaymentHistory"),e.abrupt("return",window.location.reload());case 6:i(!0);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}},l.a.createElement("div",{className:"form-row"},l.a.createElement("label",{htmlFor:"amount"},"Amount"),l.a.createElement("input",{type:"number",min:"50",max:"55000",id:"amount",name:"amount",value:d,onChange:function(e){p(e.target.value)}}),l.a.createElement("output",null,"ksh. "+d)),l.a.createElement("div",{className:"form-row"},l.a.createElement("button",null,"Repay")))))}))),ce=Object(u.g)(Object(y.b)((function(e){return{errors:e.errors,loanHistory:e.loanHistory}}),(function(e){return{actions:Object(S.b)(r,e)}}))((function(e){var t=e.actions,a=e.errors,n=e.loanHistory,r=localStorage.getItem("loanId"),c=Object(o.useState)(!1),s=Object(g.a)(c,2),i=s[0],u=s[1];return Object(o.useEffect)((function(){var e=t.loadHistory({loanId:r});return u(!1),function(){return e}}),[t,r]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"data-form",style:{width:"57%"}},l.a.createElement("header",null,l.a.createElement("h1",null,"Repayment History")),l.a.createElement("div",{className:"error"},i&&a),0===n.length?"You have no loan repayment history":l.a.createElement(l.a.Fragment,null,n.map((function(e){return l.a.createElement("div",{key:e._id,style:{display:"flex",alignSelf:"center",width:"40%",flexDirection:"column",marginTop:"20px",borderRadius:"8px",padding:"15px",boxShadow:"0px 2px 10px 0px #185a9d"}},l.a.createElement("p",null,l.a.createElement("em",{style:{fontWeight:"bold"}},"Repayment Amount:")," ","ksh. "+e.repaymentAmount),l.a.createElement("p",null,l.a.createElement("em",{style:{fontWeight:"bold"}},"Date:")," ",e.createdAt),l.a.createElement("p",null,l.a.createElement("em",{style:{fontWeight:"bold"}},"Loan Balance:")," ","ksh. "+e.loanBalance))})))))}))),se=function(e){var t=e.handleClose,a=e.show,n=e.loan;return l.a.createElement("div",{className:a?"modal display-block":"modal display-none"},l.a.createElement("section",{className:"modal-main"},l.a.createElement("h2",null,"Loan Details"),l.a.createElement("div",null,l.a.createElement("h2",null,"Amount: ",n.amount),l.a.createElement("h2",null,"Tenor: ",n.tenor),l.a.createElement("h2",null,"Interest: ",n.interest),l.a.createElement("h2",null,"monthlyInstallment: ",n.monthlyInstallment),l.a.createElement("h2",null,"Balance: ",n.balance),l.a.createElement("h2",null,"Repaid: ",!0===n.repaid?"True":"False"),l.a.createElement("h2",null,"Status: ",n.status)),l.a.createElement("div",{style:{position:"fixed",right:"0",top:"0",color:"red",fontWeight:"bold",fontSize:"1.5em",marginRight:"15px",marginTop:"15px"},onClick:t},"X")))},ie=Object(u.g)(Object(y.b)((function(e){return{errors:e.errors,loans:e.loans}}),(function(e){return{actions:{loadLoans:Object(S.b)(ee,e),approveOrRejectLoan:Object(S.b)(ne,e)}}}))((function(e){var t=e.errors,a=e.loans,n=e.actions,r=Object(o.useState)(!1),c=Object(g.a)(r,2),s=c[0],i=c[1],u=Object(o.useState)({amount:null,tenor:null,repaid:null,balance:null,interest:null,status:null,monthlyInstallment:null}),m=Object(g.a)(u,2),d=m[0],p=m[1],E=function(){return i(!1)};return Object(o.useEffect)((function(){0===a.length&&n.loadLoans()})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"data-form"},l.a.createElement("header",null,l.a.createElement("h1",null,"Loans")),l.a.createElement("p",{className:"error"},t),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Second Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Period In Months"),l.a.createElement("th",null,"Balance"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"View Loan"))),0!==a.length?l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.user.firstName),l.a.createElement("td",null,e.user.secondName),l.a.createElement("td",null,e.user.email),l.a.createElement("td",null,e.amount),l.a.createElement("td",null,e.tenor),l.a.createElement("td",null,e.balance),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(){"Rejected"===e.status?n.approveOrRejectLoan({status:"Approved",loanId:e._id}):n.approveOrRejectLoan({status:"Rejected",loanId:e._id})},className:"Pending"===e.status?"pending":"Approved"===e.status?"approved":"unverified"},e.status)),l.a.createElement("td",null,l.a.createElement(se,{show:s,loan:d,handleClose:E}),l.a.createElement("button",{onClick:function(){p({amount:e.amount,tenor:e.tenor,repaid:e.repaid,balance:e.balance,interest:e.interest,status:e.status,monthlyInstallment:e.paymentInstallment}),i(!0)}},"View")))}))):l.a.createElement("caption",null,"There are no loans yet"))))}))),ue=Object(u.g)(Object(y.b)((function(e){return{users:e.users,errors:e.errors}}),(function(e){return{actions:{loadUsers:Object(S.b)(R,e)}}}))((function(e){var t=e.actions,a=e.errors,n=e.users;return Object(o.useEffect)((function(){0===n.length&&t.loadUsers()}),[t,n]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"data-form"},l.a.createElement("header",null,l.a.createElement("h1",null,"Clients")),l.a.createElement("p",{className:"error"},a),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Second Name"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Status"))),l.a.createElement("tbody",null,n.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e.firstName),l.a.createElement("td",null,e.secondName),l.a.createElement("td",null,e.email),l.a.createElement("td",null,l.a.createElement("button",{className:"Verified"===e.status?"verified":"unverified"},e.status)))}))))))}))),me=Object(u.g)(Object(y.b)((function(e){return{errors:e.errors,loans:e.loans}}),(function(e){return{actions:Object(S.b)(r,e)}}))((function(e){var t=e.actions,a=e.loans,n=e.errors,r=Object(o.useState)(!1),c=Object(g.a)(r,2),s=c[0],i=c[1];return Object(o.useEffect)((function(){var e=t.loadLoan();return function(){return e}}),[t]),Object(o.useEffect)((function(){return i(!1)}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"data-form",style:{width:"57%"}},l.a.createElement("header",null,l.a.createElement("h1",null,"Loan Details")),l.a.createElement("div",{className:"error"},s&&n),0===a.length?"You have no loans":l.a.createElement(l.a.Fragment,null,a.map((function(e){return l.a.createElement("div",{key:e._id,style:{display:"flex",alignSelf:"center",width:"40%",flexDirection:"column",marginTop:"20px",borderRadius:"8px",padding:"15px",boxShadow:"0px 2px 10px 0px #185a9d"}},l.a.createElement("p",{style:{padding:"5px"}},l.a.createElement("em",{style:{fontWeight:"bold"}},"Amount: ")," ","ksh. "+e.amount),l.a.createElement("p",{style:{padding:"5px"}},l.a.createElement("em",{style:{fontWeight:"bold"}},"Interest:")," ","ksh. "+e.interest),l.a.createElement("p",{style:{padding:"5px"}},l.a.createElement("em",{style:{fontWeight:"bold"}},"Balance:")," ","ksh. "+e.balance),l.a.createElement("p",{style:{padding:"5px"}},l.a.createElement("em",{style:{fontWeight:"bold"}},"Period(Months):")," ",e.tenor),l.a.createElement("p",{style:{padding:"5px"}},l.a.createElement("em",{style:{fontWeight:"bold"}},"Paid:")," ",!1===e.repaid?"Not paid":"Paid"),l.a.createElement("p",{style:{padding:"5px"}},l.a.createElement("em",{style:{fontWeight:"bold"}},"Created At:")," ",e.createdAt),l.a.createElement("button",{style:{marginLeft:"30px"},className:"Pending"===e.status?"pending":"Approved"===e.status?"approved":"unverified"},e.status))})))))}))),de=Object(u.g)((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"loan-form"},l.a.createElement("header",null,l.a.createElement("h1",null,"Terms & conditions")),l.a.createElement("div",{className:"form-data"},l.a.createElement("h1",null,l.a.createElement("em",null,"NOTE:")," QUICK CREDIT DOES NOT OFFER REAL MONEY"),l.a.createElement("h2",null,"Introduction"),l.a.createElement("p",null,"These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Quick Credit accessible at "),l.a.createElement("p",null,"Minors or people below 18 years old are not allowed to use this Website."),l.a.createElement("h2",null,"Intellectual Property Rights"),l.a.createElement("p",null,"You are granted limited license only for purposes of viewing the material contained on this Website."),l.a.createElement("h2",null,"Restrictions"),l.a.createElement("p",null,"You are specifically restricted from all of the following:"),l.a.createElement("ol",{style:{paddingLeft:"15px"}},l.a.createElement("li",null,"publishing any Website material in any other media."),l.a.createElement("li",null,"selling, otherwise commercializing any Website material;"),l.a.createElement("li",null,"publicly performing and/or showing any Website material;"),l.a.createElement("li",null,"using this Website in any way that is or may be damaging to this Website;"),l.a.createElement("li",null,"using this Website in any way that impacts user access to this Website;"),l.a.createElement("li",null,"using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person;"),l.a.createElement("li",null,"engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;"),l.a.createElement("li",null,"using this Website to engage in any advertising or marketing.")),l.a.createElement("h2",null,"Variation of Terms"),l.a.createElement("p",null,"Quick Credit is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis."),l.a.createElement("h2",null,"Entire agreement"),l.a.createElement("p",null,"These Terms constitute the entire agreement between Quick Credit and you in relation to your use of this Website, and supersede all prior agreements and understandings."))))})),pe=a(74);var Ee=Object(u.g)((function(e){var t=e.history,a=localStorage.getItem("user"),n=localStorage.getItem("loanStatus"),r=localStorage.getItem("userStatus"),o=function(){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("username"),localStorage.removeItem("user"),localStorage.removeItem("loanStatus"),localStorage.removeItem("userStatus"),localStorage.removeItem("loanId"),t.push("/login")};return l.a.createElement(i.a,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"menu-container"},l.a.createElement("div",{className:"menu"},l.a.createElement("div",{className:"logo"},"Quick Credit"),l.a.createElement("div",{className:"links"},l.a.createElement("div",{className:"nav-links login"},l.a.createElement(i.c,{to:"/dashboard"},"Dashboard")),"User"===a&&"Verified"===r&&l.a.createElement("div",{className:"nav-links login"},l.a.createElement(i.c,{to:"/loanApplication"},"Loan Application")),"Approved"===n&&l.a.createElement("div",{className:"nav-links login"},l.a.createElement(i.c,{to:"/loanPayment"},"Loan Payment")),"User"===a||"Admin"===a?null:l.a.createElement("div",{className:"nav-links login"},l.a.createElement(i.c,{to:"/signup",className:"signup login"},"SignUp")),"Admin"===a&&l.a.createElement("div",{className:"nav-links login"},l.a.createElement(i.c,{to:"/clients"},"Clients")),"Admin"===a&&l.a.createElement("div",{className:"nav-links login"},l.a.createElement(i.c,{to:"/loanApplications"},"Loan Applications")),a?"User"===a?l.a.createElement("li",{className:"dropdown nav-links",style:{paddingLeft:"20px",backgroundImage:"none"}},l.a.createElement("span",null,"Account \u25be"),l.a.createElement("ul",{className:"features-menu"},"User"===a&&l.a.createElement("li",null,l.a.createElement(i.c,{to:"/profile"},"Profile")),"User"===a&&l.a.createElement("li",null,l.a.createElement(i.c,{to:"/loanDetails"},"Loans")),"User"===a&&"Approved"===n&&l.a.createElement("li",null,l.a.createElement(i.c,{to:"/loanRepaymentHistory"},"History")),l.a.createElement("li",null,l.a.createElement(pe.a,{style:{cursor:"pointer"},size:24,onClick:o})))):l.a.createElement("div",{style:{backgroundImage:"none"},className:"nav-links login"},l.a.createElement(pe.a,{style:{cursor:"pointer"},size:24,onClick:o})):l.a.createElement("div",{className:"nav-links login"},l.a.createElement(i.c,{to:"/login"},"SignIn")),l.a.createElement("div",{className:"nav-links login"},l.a.createElement(i.c,{to:"/terms"},"Terms of Service"))))),l.a.createElement("div",{className:"grid-container"},l.a.createElement(u.d,null,l.a.createElement(u.b,{path:["/dashboard","/"],exact:!0,component:p}),l.a.createElement(u.b,{path:"/verify",component:F}),l.a.createElement(u.b,{path:"/terms",component:de}),l.a.createElement(m,{path:"/signup",component:U}),l.a.createElement(m,{path:"/login",component:P}),l.a.createElement(d,{path:"/loanApplication",component:re}),l.a.createElement(d,{path:"/profile",component:oe}),l.a.createElement(d,{path:"/loanDetails",component:me}),l.a.createElement(d,{path:"/loanPayment",component:le}),l.a.createElement(d,{path:"/loanRepaymentHistory",component:ce}),l.a.createElement(d,{path:"/clients",component:ue}),l.a.createElement(d,{path:"/loanApplications",component:ie})))),l.a.createElement("div",{className:"footer-container"},l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"\xa9Copyright 2020")))))})),fe={users:[],loans:[],loanHistory:[],errors:""},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.users,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_USERS_SUCCESS":return t.users;case"LOAD_USER_SUCCESS":return t.user;case"SIGN_UP_USER_SUCCESS":return e;case"VERIFY_USER_SUCCESS":return e.map((function(e){return e._id===t.user.id?Object(D.a)(Object(D.a)({},e),{},{status:t.user.status}):e}));default:return e}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.loans,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_LOAN":case"REPAY_LOAN":return e;case"LOAD_LOAN_SUCCESS":return t.loan;case"LOAD_LOANS_SUCCESS":return t.loans;case"APPROVE_OR_REJECT_LOAN":return e.map((function(e){return e._id===t.loan.loanId?Object(D.a)(Object(D.a)({},e),{},{status:t.loan.status}):e}));default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.errors,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_ERRORS":return t.error;default:return e}},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe.loanHistory,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_REPAYMENT_HISTORY":return t.loanHistory;default:return e}},ye=Object(S.c)({users:he,loans:ge,loanHistory:ve,errors:be}),Se=a(80),Oe=a.n(Se),Ne=a(81),we=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.d;return Object(S.e)(ye,e,t(Object(S.a)(Ne.a,Oe()())))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=we();s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y.a,{store:je},l.a.createElement(i.a,null,l.a.createElement(Ee,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[82,1,2]]]);
//# sourceMappingURL=main.846a2a50.chunk.js.map