import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Box,
  Typography,
  Button,
  Grid
} from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';

const Perfil = () => {

  return (
    <>
      <Head>
        <title>
            Mi Perfil
        </title>
      </Head>
      <Box>
        <Typography>
            Pantalla de mi perfil
        </Typography>
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
