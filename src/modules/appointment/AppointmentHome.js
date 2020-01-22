import React, { useState, useEffect } from 'react';
import { makeStyles  } from '@material-ui/core/styles';


// Add Components
import {getCurrentDate, getCurrentDateDBFormat, getCurrentDateDDMMYYYY, getDate, getDateInDDMMYYYY} from '../utils/datetime';
import HomeTable from './Components/HomeTable.js';
// import BookAppointment from './Components/BookAppointment.js';
// import ViewAppointment from './Components/ViewAppointment.js';
// import UpdateTimeslot from './Components/UpdateTimeslot.js';

// API CALL
// import AppointmentAPI from '../../../api/Appointment.js';

const useStyles = makeStyles(theme => ({
  labelTitle: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,        
  },
}));


export default function AppointmentHome() {
  const classes = useStyles();
  
  const [membersList, setMembersList] = React.useState([]);
  const [roleList, setRoleList] = useState([]);  
  
  const [selectedUserData, setSelectedUserData] = React.useState({});

  const [showMainPage, setShowMainPage] = React.useState(true);
  const [showBookAppointment, setShowBookAppointment] = React.useState(false);
  const [showViewAppointment, setShowViewAppointment] = React.useState(false);
  const [showUpdateTimeslot, setShowUpdateTimeslot] = React.useState(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };    

  
  const handleMainPage = async () => {   
    setShowBookAppointment(false);
    setShowViewAppointment(false);
    setShowUpdateTimeslot(false);
    setShowMainPage(true);
  }

  const handleBookAppointment = async (data) => {
    setSelectedUserData(data);

    setShowMainPage(false);
    setShowViewAppointment(false);
    setShowUpdateTimeslot(false);
    setShowBookAppointment(true);
  }

  const handleViewAppointment = async (data) => {
    setSelectedUserData(data);
    
    setShowMainPage(false);    
    setShowUpdateTimeslot(false);
    setShowBookAppointment(false);
    setShowViewAppointment(true);
  }

  const handleUpdateTimeSlot = async (data) => {
    setSelectedUserData(data);

    setShowMainPage(false);    
    setShowBookAppointment(false);
    setShowViewAppointment(false);
    setShowUpdateTimeslot(true);
  }

  // const fetchMemberList = async () => {
  //   try{
  //     const result = await AppointmentAPI.membersList();
  //     setMembersList(result.membersList);
  //     setRoleList(result.roleList);      
  //   }catch(e){
  //     console.log('fetchMemberList error...', e);
  //   }
  // }

  
  useEffect(() => {   
    // fetchMemberList();
  }, []);


  return (
    <div>   
      { showMainPage && membersList && <HomeTable membersList = {membersList} roleList = {roleList} 
        handleBookAppointment = {handleBookAppointment} handleViewAppointment = {handleViewAppointment} 
        handleUpdateTimeSlot = {handleUpdateTimeSlot}
        page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} /> 
      }
    {/*    {
        showBookAppointment && <BookAppointment handleMainPage = {handleMainPage} userData = {selectedUserData} /> 
      }
      {
        showViewAppointment && <ViewAppointment handleMainPage = {handleMainPage} userData = {selectedUserData}  /> 
      }
      {
        showUpdateTimeslot && <UpdateTimeslot handleMainPage = {handleMainPage} userData = {selectedUserData}  /> 
      } */}
    </div>
  );
}
