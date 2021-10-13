import React from 'react';
import { Container,Box,Toolbar,Typography,List,ListItem,Drawer,AppBar,IconButton} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { useState } from 'react';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  menuButton:{
    marginRight:theme.spacing(2)
  },
  title:{
    marginRight:"auto"
  },
  drawer:{
    width:250,
    marginTop:100
  },
  iconAlign:{
    marginLeft:100
  },
  ListItem:{
    marginTop:10
  },
  content:{
    padding:theme.spacing(9)
  }
}));

const Sidebar = () => {
  const classes = useStyles();
  const [opened,setOpened] = useState(false);
  return(
      <Container className={classes.root}>
        <Drawer open={opened} onClose={() => setOpened(false)}>
          <List className={classes.drawer}>
            <Link to='/'>
              <ListItem  button className={classes.ListItem}>
                <Box>
                  Home
                </Box>  
              </ListItem>
            </Link>
            <Link to="/category/jewelery">
              <ListItem button className={classes.ListItem}>
                <Box>
                  Jewellery
                </Box>  
              </ListItem>
            </Link>
            <Link to="/category/electronics">
              <ListItem button className={classes.ListItem}>
                <Box>
                  Electronics
                </Box>  
              </ListItem>
            </Link>
            <Link to="/category/men's clothing">
              <ListItem button className={classes.ListItem}>
                <Box>
                  Men Clothing
                </Box>  
              </ListItem>
            </Link>
            <Link to="/category/women's clothing">
              <ListItem button className={classes.ListItem}>
                <Box>
                  Women Clothing
                </Box>  
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <AppBar style={{background:'#2E3B55'}}>
          <Toolbar>
            <Typography type="title" color="inherit" style={{flex:1}}>
              Neuron Ltd.
            </Typography>
            <IconButton edge="start"
              className={classes.menuButton}
              color="inherit"
              onClick={()=>setOpened(true)}>
                <DehazeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
  );
}
export default Sidebar;