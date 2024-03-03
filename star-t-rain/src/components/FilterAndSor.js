import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

export default function FilterAndSort() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{display:"flex", justifyContent:"flex-start"}}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={<FilterAltOutlinedIcon/>}
        sx={{color:"black"}}
      >
        FILTER & SORT
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
       
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  sx={{width:"150px"}} onClick={handleClose}>Option 1</MenuItem>
        <MenuItem  sx={{width:"150px"}} onClick={handleClose}>Option 2</MenuItem>
        <MenuItem  sx={{width:"150px"}} onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </Box>
  );
}