import { useEffect, useState } from 'react';
import NextLink from 'next/link'
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
import { Searchbar } from '../../components/Searchbar';
import { PaginationWidget } from '../../components/Pagination';
import { FilterMenu } from '../../components/FilterMenu';

import { hardCodedData } from '../../helpers/exampleData'

// Helpers
import { applyFilters, applyPagination } from '../../helpers/filter-helpers'

const Products = () => {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(0)
  const [filter, setFilter] = useState("Todas")

  const filteredProducts = filter === "Todas" ? hardCodedData : hardCodedData.filter(product => product.category === filter )
  const searchedProducts = applyFilters(filteredProducts, search);

  const paginatedProducts = applyPagination(
    searchedProducts,
    page,
    9
  );

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
            my: 4,
          }}
        >
          <Typography 
            variant="h5"
          >
            Productos Disponibles
          </Typography>
          <Box
            sx={{
              width: '60%',
              display: 'flex',
              alignItems: 'center',
              jusifyContent: 'space-between',
            }}
          >
            <Searchbar 
              search={search}
              setSearch={setSearch}
              placeholder="Busca el nombre de un producto"
            />
            <FilterMenu 
              filter={filter}
              setFilter={setFilter}
              options={["Todos", "Carrocería", "Luces", "Cristales"]}
              title="Filtros"
            />
          </Box>
        </Box>
          <Grid 
            container 
            spacing={4}
            sx={{
              mb: 4
            }}
          >
              {
                paginatedProducts && paginatedProducts.map((item, i) => (
                    <NextLink 
                      href={`/productos/${i}/`}
                      key={i}
                    >
                      <Grid item  xs={4}>
                          <Product product={item} />
                      </Grid>
                    </NextLink>
                )) 
              }
          </Grid>

          <PaginationWidget
            count={filteredProducts.length}
            page={page}
            setPage={setPage}
            rowsPerPage={9}
          />
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
