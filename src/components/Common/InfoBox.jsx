import React from 'react'

import {
    Box,
    Typography,
} from '@mui/material'

const InfoBox = ({ label, info }) => {
  return (
    <Box>
        <Typography variant="h6">
          {label}
        </Typography>
        <Typography variant="body1">
          {info}
        </Typography>
    </Box>
  );
}

export default InfoBox