import * as React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Home, Phone, Map } from "@material-ui/icons";
import {User,} from "react-feather";
import SideDrawer from "./SideDrawer";
import {Link} from "react-router-dom"
import logo from "../assets/logo2.jpg"
const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
    
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
    
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const navLinks = [
  { title: `Ballina`, path: `/`, icon: <Home/>  },
  { title: `Rreth platformës Safometër`, path: `/about`,  icon: <Map/> },
  { title: `Kontakti`, path: `/contact`,  icon: <Phone/> },
  
];

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{backgroundColor: `#04B4AE`}}>
      <Toolbar>
        <Container maxWidth="md" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Link to="/">

            {/* <Home fontSize="large" /> */}
            <img src={logo}></img>
            
            </Link>
          </IconButton>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path, icon }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button> 
                  
                  <ListItemText primary={icon}   /> &nbsp;

                    <ListItemText primary={title}   />
                  </ListItem>
                </a>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
