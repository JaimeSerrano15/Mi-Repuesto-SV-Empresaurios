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

const Auction = () => {

  return (
    <>
      <Head>
        <title>
            Subastas
        </title>
      </Head>
      <Box>
        <Typography>
            Pantalla de Subastas
        </Typography>
      </Box>
    </>
  );
};

Auction.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Auction;
