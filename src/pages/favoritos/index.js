import { useEffect, useState } from 'react';
import NextLink from 'next/link'
import Head from 'next/head';
import {
  Box,
  Typography,
  Grid,
  Button
} from '@mui/material';
import { AuthGuard } from '../../components/authentication/auth-guard';
import { DashboardLayout } from '../../components/dashboard/dashboard-layout';
// Components
import { Product } from '../../components/Product';
import { Searchbar } from '../../components/Searchbar';
import { PaginationWidget } from '../../components/Pagination';
import { FilterMenu } from '../../components/FilterMenu';
import { EmptyScreen } from '../../components/EmptyScreen';

// Helpers
import { applyFilters, applyPagination } from '../../helpers/filter-helpers'

const Favoritos = () => {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(0)
  const [filter, setFilter] = useState("Todas")

  // const filteredProducts = filter === "Todas" ? hardCodedData : hardCodedData.filter(product => product.category === filter )
  const filteredFavorites = filter === "Todas" ? [] : [] 
  const searchedFavorites = applyFilters(filteredFavorites, search);

  const paginatedFavorites = applyPagination(
    searchedFavorites,
    page,
    9
  );

  return (
    <>
      <Head>
        <title>
            Mis Favoritos
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
           Mis productos favoritos
          </Typography>
          {
            filteredFavorites.length > 0 &&
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
                options={["Todas", "Carrocería", "Luces", "Cristales"]}
                title="Categoría"
              />
            </Box>
          }
        </Box>
        <Box
          sx={{
            mb: 4, 
            p: 2,
            borderRadius: '10px',
            backgroundColor: 'white',
          }}
        > 
        
        {
          filteredFavorites.length > 0 ? 
          <Grid 
            container 
            spacing={4}
            sx={{
              mb: 4
            }}
          >
              {
                paginatedFavorites && paginatedFavorites.map((item, i) => (
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
          </Grid> :
          
          <EmptyScreen 
              element="favoritos"
              action={
                <NextLink
                  href="/productos"
                >
                  <Button
                    variant="contained"
                    sx={{
                        width: 200
                      }}
                  >
                    Productos
                  </Button>
                </NextLink>
              }
          />
          }
        </Box>    
          {
            filteredFavorites.length > 0 &&
            <PaginationWidget
              count={filteredFavorites.length}
              page={page}
              setPage={setPage}
              rowsPerPage={9}
            />
          }
        </Box>
    </>
  );
};

Favoritos.getLayout = (page) => (
  <AuthGuard>
    <DashboardLayout>
      {page}
    </DashboardLayout>
  </AuthGuard>
);

export default Favoritos;
