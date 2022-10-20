import React from 'react'

import {
    Box,
    Typography,
    Button,
} from '@mui/material';

const Pressable = (props) => {
  const { title, sx, icon } = props
  return (
    <Button
        sx={{ ...sx, width: '200px' }}
    >
        <Box>
            {icon}
        </Box>
        <Box>
            {title}
        </Box>
    </Button>
  );
}

export default Pressable;
