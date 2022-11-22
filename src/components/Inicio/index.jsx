import React from 'react'
import {
    Box,
    Typography,
    Button,
    Grid,
} from '@mui/material'

// Icons
import CarRepairIcon from '@mui/icons-material/CarRepair';
import GavelIcon from '@mui/icons-material/Gavel';
import HardwareIcon from '@mui/icons-material/Hardware';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';

import HeroImage from '../Common/HeroImages';
import Pressable from '../Common/Pressable';

const HomePage = () => {
    return (
        <Box>
            <HeroImage />
            <Grid container sx={{ py: 10 }}>
                <Grid item sx={3}>
                    <Pressable 
                        title="Explora productos" 
                        sx={{ 
                            py: 4, mx: 4, 
                            borderRadius: 4, 
                            border: '1px solid rgba(0, 0, 0, 0.1)', 
                            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        icon={<CarRepairIcon fontSize="large" />}
                        path="/productos"
                    />
                </Grid>
                <Grid item>
                    <Pressable 
                        title="Tus productos" 
                        sx={{ 
                            py: 4, mx: 4, 
                            borderRadius: 4, 
                            border: '1px solid rgba(0, 0, 0, 0.1)', 
                            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        icon={<HardwareIcon fontSize="large" />}
                        path="/"
                    />
                </Grid>
                <Grid item sx={3}>
                    <Pressable 
                        title="Crea subasta" 
                        sx={{ 
                            py: 4, mx: 4, 
                            borderRadius: 4, 
                            border: '1px solid rgba(0, 0, 0, 0.1)', 
                            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                        icon={<GavelIcon fontSize="large" />}
                        path="https://auction-empresaurios-one.herokuapp.com/"
                    />

                </Grid>
            </Grid>
            
        </Box>
    );
}

export { HomePage }