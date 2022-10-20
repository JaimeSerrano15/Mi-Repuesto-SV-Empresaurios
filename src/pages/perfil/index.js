import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Typography,
  Grid
} from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
import InfoBox from '../../components/Common/InfoBox';

const Perfil = () => {
  return (
    <>
      <Head>
        <title>
            Mi Perfil
        </title>
      </Head>
      <Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid black',
          py: 2,
        }}>
          <Box
            component="img"
            sx={{
              borderRadius: '100%',
              width: '150px',
              height: '150px',
            }}
            src='https://therealchamps.com/wp-content/uploads/getty-images/2018/08/1381398418.jpeg'
          >
          </Box>
          
          <Typography
            variant="h4"
          >
            Alejandro Cader
          </Typography>
          <Typography>
            AlejandroC@gmail.com
          </Typography>
          <Typography>
            San Salvador
          </Typography>
        </Box>
        <Grid container sx={{ p: 4 }}>
          <Grid item xs={6}>
            <InfoBox 
              label="Nombres"
              info="Miguel Alejandro"
            />
          </Grid>
          <Grid item xs={6}>
            <InfoBox 
              label="Apellidos"
              info="Cruz Cader"
            />
          </Grid>
          <Grid item xs={6}>
            <InfoBox 
              label="Edad"
              info="23 años"
            />
          </Grid>
          <Grid item xs={6}>
            <InfoBox 
              label="Artículos Vendidos"
              info="12"
            />
          </Grid>
          <Grid item xs={6}>
            <InfoBox 
              label="Correo Electrónico"
              info="alejandroC@gmail.com"
            />
          </Grid>
          <Grid item xs={6}>
            <InfoBox 
              label="Dirección"
              info="Colonia Lomas Lindas, pasaje 23, casa #24, San Salvador"
            />
          </Grid>
          <Grid item xs={6}>
            <InfoBox 
              label="Telefono"
              info="3232-4343"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

Perfil.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Perfil;
