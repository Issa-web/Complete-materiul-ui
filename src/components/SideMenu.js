import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core"

// withStyles & makeStyles

const style =  {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '113%',
        backgroundColor: '#253053'
    }
}



const SideMenu = (props) => {
    const {classes} = props
    console.log("1",classes)
    console.log('2', props)
  return (
    <div className={classes.sideMenu}>
      
    </div>
  );
}

export default withStyles(style)(SideMenu);
