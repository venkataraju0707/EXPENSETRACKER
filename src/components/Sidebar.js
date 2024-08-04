import React from 'react';
import { Drawer, List, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
         
          <Button color="inherit" component={Link} to="/expenselist">ExpenseList</Button></List>
          <List>
          <Button color="inherit" component={Link} to="/expenseitem">ExpenseItem</Button>
          </List>
          <List>
            <Button color="inherit" component={Link} to="/expensechart">ExpenseChart</Button>
         
      </List>
    </Drawer>
  );
};

export default Sidebar;
