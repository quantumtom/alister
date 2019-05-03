import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './AppHeader.css';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
        <Typography variant="title" color="inherit">
            Admin Lister
        </Typography>
    </Toolbar>
  </AppBar>
);

export default AppHeader;
