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

const Favorites = () => {

  return (
    <>
      <Head>
        <title>
            Mis Favoritos
        </title>
      </Head>
      <Box>
        <Typography>
            Pantalla de Favoritos
        </Typography>
      </Box>
    </>
  );
};

Favorites.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Favorites;
