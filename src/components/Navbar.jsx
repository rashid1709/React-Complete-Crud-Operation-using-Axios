import React from 'react';
import {AppBar, Toolbar, Typography,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background:#111111;
`
const Tabs = styled(NavLink)`
margin-right:20px;
font-size:20px;;
color:inherit;
text-decoration:none
`
function Navbar() {
  return (
    <div>
      <Header position='static'>
        <Toolbar>
          <Tabs to="/">Code For Interview</Tabs>
          <Tabs to="/all">All Users</Tabs>
          <Tabs to="/add">Add User</Tabs>


        </Toolbar>
      </Header>
    </div>
  )
}

export default Navbar
