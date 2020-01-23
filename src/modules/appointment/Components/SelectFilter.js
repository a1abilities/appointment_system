import React, { useEffect } from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TableCell from '@material-ui/core/TableCell';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles(theme => ({
  textsize:{
    fontSize: theme.typography.pxToRem(12),
  },
  labelTitle: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(20),
    color: theme.palette.text.secondary,
  },
  drpdwn:{
    fontSize: theme.typography.pxToRem(12),
  },
}));

export default function SelectFilter({filterTabData}) {
  
  const classes = useStyles();    

  const franchiseList = Object.values(filterTabData)[0];
  const userList = Object.values(filterTabData)[1];
  const roleList = Object.values(filterTabData)[2];

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
                    { ((franchiseList !== undefined && franchiseList!== "" && franchiseList.length > 0) ? franchiseList : []).map((data ) => {
                        return( <MenuItem className={classes.textsize}>{data.franchise_name}</MenuItem> )
                      })
                    } 
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
                    { ((roleList !== undefined && roleList!== "" && roleList.length > 0) ? roleList : []).map((data ) => {
                        return( <MenuItem className={classes.textsize}>{data.name}</MenuItem> )
                      })
                    } 
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
                   { ((userList !== undefined && userList!== "" && userList.length > 0) ? userList : []).map((data ) => {
                        return( <MenuItem className={classes.textsize}>{data.name}</MenuItem> )
                      })
                    } 
                </Select>
            </Grid>
            
        </Grid>
        
  )
}