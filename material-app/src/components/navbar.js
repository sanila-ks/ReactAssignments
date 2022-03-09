
import { AppBar, InputBase, Toolbar, Typography, alpha, Badge, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Search, Mail, Notifications, Cancel } from '@material-ui/icons';
import { useState } from 'react';

const useStyle = makeStyles(theme => ({
    toolbar: {
        display: "flex",
        justifyContent : "space-between"
    },
    search : {
        display : "flex",
        alignItems : "center",
        width : "50%",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        [theme.breakpoints.down("sm")] : {
            display : (props) => (props.open)? "flex" : "none",
            width : '70%'
        },
    },
    logoLg : {
        display : 'none',
        [theme.breakpoints.up("sm")] : {
            display : "block",
        },
    },
    logoSm : {
        display : 'block',
        [theme.breakpoints.up("sm")] : {
            display : 'none',
        },
    },
    input : {
        color:"white",
        marginLeft : theme.spacing(1)
    },
    cancel : {
        [theme.breakpoints.up('sm')] : {
            display : 'none'
        }
    },
    searchButton : {
        marginRight : theme.spacing(2),
        [theme.breakpoints.up("sm")] : {
            display : 'none',
        },
    },
    icons : {
        alignItems : 'center',
        display : (props) => (props.open)? "none" : "flex",
    },
    badge : {
        marginRight : theme.spacing(2)
    }
}))

function Navbar() {
  const [open, setOpen] = useState(false)  
  const classes = useStyle({open});
  return (
    <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
                Pranavam
            </Typography> 
            <Typography variant="h6" className={classes.logoSm}>
                Pranav
            </Typography> 

            <div className={classes.search}>
                <Search />
                <InputBase placeholder='Search.........' className={classes.input}/>
                <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
            </div>

            <div className={classes.icons}>
                <Search className={classes.searchButton} onClick = {() => setOpen(true)} />
                <Badge color="secondary" badgeContent={4} className={classes.badge}>
                    <Mail />
                </Badge>
                <Badge color="secondary" badgeContent={2} className={classes.badge}>
                    <Notifications />
                </Badge>
                <Avatar alt="Profile pic" src="https://files.oyebesmartest.com/uploads/preview/insta-119655877-1aehjnjxb.jpeg" />
            </div>
            
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;
