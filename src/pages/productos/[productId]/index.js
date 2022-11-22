import { useEffect, useState } from 'react';
import NextLink from 'next/link'
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Box,
  Typography,
  Button,
  Grid
} from '@mui/material';
import { AuthGuard } from '../../../components/authentication/auth-guard';
import { DashboardLayout } from '../../../components/dashboard/dashboard-layout'
import Map from '../../../components/Map'

import { hardCodedData } from '../../../helpers/exampleData';

// Icons
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const ProductDetail = () => {
    const router = useRouter()
    const { productId }  = router.query;
    
    return (
        <>
        <Head>
            <title>
                Mi Perfil
            </title>
        </Head>
        <Box
            sx={{
                m: 2,
                p: 4,
                boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',           
                backgroundColor: 'white',
                borderRadius: '5px',
            }}
        >
            <NextLink
                href="/productos"
            >
                <KeyboardBackspaceOutlinedIcon sx={{ cursor: 'pointer' }} />
            </NextLink>
            <Grid container >
                <Grid item xs={6}> 
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 2
                        }}
                    >
                        {hardCodedData[productId].name}
                    </Typography>
                    <Box>
                        <img src={hardCodedData[productId].img} alt={hardCodedData[productId].name} height="400px" width="500px" />
                    </Box>
                </Grid>
                <Grid 
                    item 
                    xs={6}
                    sx={{
                        p: 4

                    }}
                > 
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 2,
                        }}
                    >
                        Descripción
                    </Typography>
                    <Typography
                        variant="body1"
                    >
                        {hardCodedData[productId].description}
                    </Typography>
                    <Typography
                        variant="h4"
                    >
                        ${hardCodedData[productId].price}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'start',
                            mt: 4
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                mx: 1,
                                py: 1.5,
                                width: '225px',
                                fontSize: '1rem'
                            }}

                        > Agregar a favoritos </Button>
                        <Button
                            variant="contained"
                            color="success"
                            sx={{
                                mx: 1,
                                py: 1.5,
                                width: '225px',
                                fontSize: '1rem'
                            }}
                        > 
                            Comprar 
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Map />
        </Box>
        </>
    );
};

ProductDetail.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default ProductDetail;
