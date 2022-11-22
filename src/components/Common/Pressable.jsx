import React from 'react';
import NextLink from 'next/link';

import {
    Box,
    Typography,
    Button,
} from '@mui/material';

const Pressable = (props) => {
  const { title, sx, icon, path } = props
  return (
    <NextLink href={path}>
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
    </NextLink>
  );
}

export default Pressable;
