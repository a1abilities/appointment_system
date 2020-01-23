import React, {Suspense, lazy} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';



import PageLoader from './common/PageLoader';


const UserList = lazy(()=> import('./modules/appointment/AppointmentHome.js'));
const BookAppointment = lazy(() => import('./modules/appointment/Components/BookAppointment.js'));
const ViewAppointment = lazy(() => import('./modules/appointment/Components/ViewAppointment.js'));
const UpdateTimeslot  = lazy(() => import('./modules/appointment/Components/UpdateTimeslot.js'));

const App = () => {
  return(
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route  exact path="/" render={() => <Redirect to="/userlist" />} />
          <Route  exact path="/userlist"
                  render={props => { return <UserList {...props} /> }} 
          />
          <Route  exact path="/bookappointment"
                  render={props => { return <BookAppointment {...props.location.state} /> }} 
          />
          <Route  exact path="/viewappointment"
                  render={props => { return <ViewAppointment {...props.location.state} /> }} 
          />
          <Route  exact path="/updatetimeslot"
                  render={props => { return <UpdateTimeslot {...props.location.state} /> }} 
          />          
        </Switch>
      </Suspense>
    </Router>
  )
};


App.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default App;
