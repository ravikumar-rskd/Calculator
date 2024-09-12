import React from 'react';
import { Box,  Button,  Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


const Header=()=>{
  // const navigate=useNavigate();
    return( 
    <Box display={'flex'} gap={2} sx={{color:'silver',backgroundColor:'black',padding:1}}>
        <Typography variant='h4'sx={{fontWeight:'bold',padding:1}} >
          RASIO
        </Typography>
        <nav className='headNav' >
         <Button>HOME</Button>
         {/* <Button>MOVIES</Button> */}
         <Button>CONTACT</Button>
        </nav>
       </Box>
    )
};
export default Header;