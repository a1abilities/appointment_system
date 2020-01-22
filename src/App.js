import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './modules/appointment/AppointmentHome.js'

const App = () => {
  return(
  <Router>
    <Switch>
    {/* <Route path="/">
      <Redirect to="/userlist" from="/" />
    </Route> */}
    <Route path="/userlist">
      <Home />
    </Route>
    </Switch>
  </Router>
  )
};

export default App;


// import React, { Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
// import Header from './modules/partials/header.js';
// import Footer from './modules/partials/footer.js';
// import Home from './modules/appointment/AppointmentHome.js'

// function App() {
//   return (
//     <Fragment>
//       {/* <Header /> */}
//       {/* <Footer /> */}
//       <Home />
//     </Fragment>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
