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

// Components
import { Product } from '../../components/Product';
import { Searchbar } from '../../components/Searchbar'

import { hardCodedData } from '../../helpers/exampleData'

// Helpers
import { applyFilters } from '../../helpers/filter-helpers'

const Products = () => {
  const [search, setSearch] = useState("")

  const filteredProducts = applyFilters(hardCodedData, search);

  return (
    <>
      <Head>
        <title>
            Productos
        </title>
      </Head>
      <Box
        sx={{
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography 
            variant="h4"
          >
            Productos Disponibles
          </Typography>
          <Box
            sx={{
              width: '40%',
            }}
          >
            <Searchbar 
              search={search}
              setSearch={setSearch}
              placeholder="Busca el nombre de un producto"
            />
          </Box>
        </Box>
          <Grid 
            container 
            spacing={4}
          >
              {
                filteredProducts && filteredProducts.map((item, i) => (
                  <Grid item key={i} xs={4}>
                      <Product product={item} />
                  </Grid>
                )) 
              }
          </Grid>
        </Box>
    </>
  );
};

Products.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Products;
