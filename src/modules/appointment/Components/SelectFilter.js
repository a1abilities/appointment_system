import React, { useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CachedIcon from '@material-ui/icons/Cached';
import IconButton from '@material-ui/core/IconButton';
import BackArrowIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import PrintIcon from '@material-ui/icons/Print';
import PaymentIcon from '@material-ui/icons/Payment';
import CloudUpload from '@material-ui/icons/CloudUpload';
import SendIcon from '@material-ui/icons/Send.js';
import ViewIcon from '@material-ui/icons/RemoveRedEye';
import CommentIcon from '@material-ui/icons/Comment';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import TablePagination from '@material-ui/core/TablePagination';
import CreateIcon from '@material-ui/icons/Create';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import UpdateIcon from '@material-ui/icons/Update';
import AccountBalanceIcon from '@material-ui/icons/AccountBalanceWallet';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TableFooter from '@material-ui/core/TableFooter';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import DetailsIcon from '@material-ui/icons/Details';
import InputLabel from '@material-ui/core/InputLabel';
import LinearProgress from '@material-ui/core/LinearProgress';
import Popover from '@material-ui/core/Popover';
import moment from 'moment';

// Components
import {getDate, setTime, getCurrentDate, getTimeinDBFormat, get12HourTime } from '../../../utils/datetime'



const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(13),
  },
  body: {
    fontSize: 11,
  },
}))(TableCell);

const useStyles = makeStyles(theme => ({
  textsize:{
    fontSize: theme.typography.pxToRem(12),
  },
  labelTitle: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,        
  },
  appBar: {
    position: 'relative',
    height: theme.spacing(5),
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: theme.typography.pxToRem(14),
    color:"white",
    marginTop:theme.spacing(-3),
  },
  root: {
    flexGrow: 1,
  },
  
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  textsize:{
    fontSize: theme.typography.pxToRem(12),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  button:{
    color:"white",
    fontSize: theme.typography.pxToRem(10),
    margin: theme.spacing(1),
  },
}));

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});



export default function SelectFilter() {
  
  const classes = useStyles();    

//   const checkOperationIsUpdate = async () => {
//     if(operation === 'update'){
//       handleRandomInput([
//         {name: 'date', value:   selectedTimeslot.date},
//         {name: 'start_time', value: setTime(selectedTimeslot.start_time)},
//         {name: 'end_time', value: setTime(selectedTimeslot.end_time)}
//       ]);      
//     }
//   }

//   const submitTimeslot = async () => {
//     try{     
//       const result = await AppointmentAPI.addOrUpdateTimeslot({
//         userId: selectedTimeslot.user_id,
//         date : getDate(inputs.date),
//         start_time : getTimeinDBFormat(inputs.start_time),
//         end_time : getTimeinDBFormat(inputs.end_time), 
//         appointmentId : selectedTimeslot.id,
//         operation : operation,
//       });
//       setCurrentTimeslotList(result.timeSlot);
//       handleClose();
//     }catch(e){
//       console.log('handleLeave Error...', e);
//     }
//   }

  return (    
    
        <Grid container spacing={4}  direction="row" justify="center" alignItems="center">
            <Grid item xs={12} sm={3}>
                <InputLabel  className={classes.textsize} htmlFor="date">Franchise </InputLabel>
                <Select
                    name="franchise_id"
                    // onChange={handleColorInputChange}
                    // value={inputs.franchise_id}
                    inputProps={{
                        name: 'franchise_id',
                        id: 'franchise_id',
                    }}
                    className={classes.drpdwn}
                    fullWidth                    
                    required
                >
                    {/* { (colorList || []).map((data, index)=>{
                        return( */}
                        <MenuItem className={classes.textsize}>{"data.color"}</MenuItem>
                    {/* //     )
                    //     })
                    // } */}
                </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
                <InputLabel  className={classes.textsize} htmlFor="start_time">Position/Role</InputLabel>
                <Select
                    name="franchise_id"
                    // onChange={handleColorInputChange}
                    // value={inputs.franchise_id}
                    inputProps={{
                        name: 'franchise_id',
                        id: 'franchise_id',
                    }}
                    className={classes.drpdwn}
                    fullWidth                    
                    required
                >
                    {/* { (colorList || []).map((data, index)=>{
                        return( */}
                        <MenuItem className={classes.textsize}>{"data.color"}</MenuItem>
                    {/* //     )
                    //     })
                    // } */}
                </Select>
            </Grid>
            <Grid item xs={12} sm={3}>
                <InputLabel  className={classes.textsize} htmlFor="end_time">User</InputLabel>
                <Select
                    name="franchise_id"
                    // onChange={handleColorInputChange}
                    // value={inputs.franchise_id}
                    inputProps={{
                        name: 'franchise_id',
                        id: 'franchise_id',
                    }}
                    className={classes.drpdwn}
                    fullWidth                    
                    required
                >
                    {/* { (colorList || []).map((data, index)=>{
                        return( */}
                        <MenuItem className={classes.textsize}>{"data.color"}</MenuItem>
                    {/* //     )
                    //     })
                    // } */}
                </Select>
            </Grid>
            
        </Grid>
        
  )
}