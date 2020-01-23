import React, { useState, useEffect } from 'react';
import { makeStyles  } from '@material-ui/core/styles';


// Add Components
import HomeTable from './Components/HomeTable.js';


// API CALL
import AppointmentAPI from '../../api/Appointment.js';

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
  const [filterTabData, setFilterTabData] = useState([]);  

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const fetchMemberList = async () => {
    try{
      const result = await AppointmentAPI.membersList();
      setMembersList(result.membersList);
      setRoleList(result.roleList);
    }catch(e){
      console.log('fetchMemberList error...', e);
    }
  }

  const fetchRequiredList = async () => {
    try{
      const result = await AppointmentAPI.fetchRequiredList();
      setFilterTabData(result);
    }catch(e){
      console.log('fetchRequiredList error...', e);
    }
  }

  
  useEffect(() => {   
    fetchMemberList();
    fetchRequiredList();
  }, []);


  return (
    <div>   
      { membersList && <HomeTable membersList = {membersList} roleList = {roleList} filterTabData = {filterTabData} 
        page={page} rowsPerPage={rowsPerPage} handleChangePage={handleChangePage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
      }
    </div>
  );
}
