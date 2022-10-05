import * as React from "react";
import { PaginationItem, Typography, Pagination, Box } from "@mui/material";
// import { PaginationContainer } from "../common/styles/containers";

export const PaginationWidget = (props) => {
  const { page, setPage, rowsPerPage, count } = props;
  const handlePageChange = (event, newPage) =>
    setPage(newPage - 1);

  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
        }}
    >
      <Pagination
        variant="outlined"
        shape="rounded"
        count={Math.ceil(count / rowsPerPage)}
        onChange={handlePageChange}
        page={page + 1}
        renderItem={(item) => (
          <PaginationItem
            components={{
              previous: () => <Typography>Previous</Typography>,
              next: () => <Typography>Next</Typography>,
            }}
            {...item}
          />
        )}
      />
      <Typography component="p" variant="body1" color="text.light">
        Showing: {page * rowsPerPage + 1} - {( rowsPerPage  * page + rowsPerPage > count ? count : rowsPerPage  * page + rowsPerPage   )}{" "}
        from {count} Total
      </Typography>
    </Box>
  );
};
