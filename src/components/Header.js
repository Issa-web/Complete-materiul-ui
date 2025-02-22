import React from 'react';
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, makeStyles } from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        transform: 'translateZ(0)'
        
    },
    searchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }
}))



function Header() {

    const classes = useStyles()

  return (
    <AppBar position="static" className={classes.root}>
        <Toolbar>
            <Grid container
            alignItems='center'>
                <Grid item  >
                    <InputBase 
                        placeholder="Search topics"
                        className={classes.searchInput}
                        startAdornment={<SearchIcon fontSize="small" />}
                    />
                </Grid>
                <Grid item sm ></Grid>
                <Grid item  >
                    <IconButton >
                        <Badge bagdeContent={4} color="secondary">
                            <NotificationsNoneIcon ontSize="small"  />
                        </Badge>                      
                    </IconButton>
                    <IconButton>
                        <Badge bagdeContent={4} color="primary">
                                <ChatBubbleOutlineIcon ontSize="small" />
                        </Badge>  
                    </IconButton>
                    <IconButton>
                                <PowerSettingsNewIcon ontSize="small"  />
                    </IconButton>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  );
}

export default Header;
