import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ExploreIcon } from './ExploreIcon';
import { SellTicketsIcon } from './SellTicketsIcon'
import { ManageTicketsIcon } from './ManageTicketsIcon'

export const MSAppBar = () => {
  let auth = true;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const location = useLocation();

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', border: 'none' }}>
      <Toolbar>
        <div>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" component="div" sx={{ color: 'black', fontSize: '2.4rem', fontWeight: 'bold' }}>
              Moonshot
            </Typography>
          </Link>
        </div>
        {location.pathname === '/' ? (
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <SellTicketsIcon />
            <ManageTicketsIcon />
          </div>
          
        ) : location.pathname === '/sell-ticket' ? (
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <ExploreIcon />
            <ManageTicketsIcon /> 
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <ExploreIcon />
            <SellTicketsIcon />
          </div>
        )}
        <div style={{ flexGrow: 1 }} />
        {auth && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              sx={{ color: 'black' }}
            >
              <AccountCircle />
            </IconButton>
            <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: 'black' }}
        >
          <MenuIcon />
        </IconButton>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};