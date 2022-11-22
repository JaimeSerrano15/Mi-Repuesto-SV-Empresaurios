import Head from 'next/head';
import NextLink from 'next/link';
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
      <Box style={{ 
        display: 'flex',
      }}>
      <NextLink href="https://auction-empresaurios-one.herokuapp.com/">
        <Button style={{
          border: '1px solid gray',
          borderRadius: '10px',
          boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
          marginTop: '10px',
          marginLeft: '20px',
        }}>
          <Typography style={{ fontSize: '1.5rem' }}>
            Ir a panel de subastas
          </Typography>
        </Button>
      </NextLink>
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
