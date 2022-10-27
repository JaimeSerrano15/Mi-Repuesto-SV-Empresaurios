import { useEffect, useState } from 'react';
import NextLink from 'next/link'
import Head from 'next/head';
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
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
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [filter, setFilter] = useState("Todas");
  const [brand, setBrand] = useState("Todas");
  const [year, setYear] = useState("");
  const [noFilters, setNoFilters] = useState(true);
  console.log({year})

  const getProducts = () => {
    const byBrand = brand === "Todas" ? hardCodedData : hardCodedData.filter(product => product.brand === brand);
    const byCategory = filter === "Todas" ? byBrand : byBrand.filter(product => product.category === filter);
    const byYear = year === "" ? byCategory : byCategory.filter(product => product.year === year);
    return byYear;
  }
  const filteredProducts = noFilters ? hardCodedData : getProducts();
  const searchedProducts = applyFilters(filteredProducts, search);

  const paginatedProducts = applyPagination(
    searchedProducts,
    page,
    9
  );

  const ClearFilter = () => {
    setFilter("Todas");
    setBrand("Todas");
    setYear("")
  }

  useEffect(() => {
    if(filter === "Todas" && brand === "Todas" && year === "") {
      setNoFilters(true);
    } else {
      setNoFilters(false);
    }
  }, [filter, brand, year])

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
              options={["Todas", "Carrocería", "Luces", "Cristales"]}
              title="Categoría"
            />
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
        }}>
            <FilterMenu 
              filter={brand}
              setFilter={setBrand}
              options={["Todas", "Toyota", "Nissan", "Kia", "Mitsubishi", "Ford", "Chevrolete", "BMW", ""]}
              title="Marca"
            />
            <TextField 
              onChange={(e) => setYear(e.target.value) }
              value={year}
            />
            <Button onClick={ClearFilter}>
              Borrar Filtros
            </Button>
          {/* <FilterMenu 
              filter={filter}
              setFilter={setFilter}
              options={["Todas", "Carrocería", "Luces", "Cristales"]}
              title="Categoría"
            /> */}
        </Box>
        <Box
          sx={{
            mb: 4, 
            p: 2,
            borderRadius: '5px',
            backgroundColor: 'white',
          }}
        >
          <Grid 
            container 
            spacing={4}
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
        </Box>

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
