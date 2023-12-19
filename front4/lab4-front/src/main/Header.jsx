import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='inherit' position="static">
        <Toolbar sx={{justifyContent: 'space-around'}}>
          <Typography variant="h6" component="div" className='fontik'>
            Artem Balin
          </Typography>
          <Typography variant="h6" component="div" className='fontik'>
            №693
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
