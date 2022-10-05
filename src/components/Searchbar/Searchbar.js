// import InputAdornment from "@material-ui/core/InputAdornment";
import React, { useRef } from "react";
import { Box, TextField } from "@mui/material";

export const Searchbar = (props) => {
  const { search, setSearch, placeholder } = props;
  const queryRef = useRef(null);

  const handleQueryChange = (event) => {
    event.preventDefault();
    setSearch(queryRef.current?.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleQueryChange}
      sx={{
        flexGrow: 1,
        py: 1.875,
        mx: 4,
      }}
    >
      <TextField
        defaultValue={search}
        fullWidth
        variant="outlined"
        width="100%"
        onChange={handleQueryChange}
        inputProps={{ ref: queryRef }}
        // InputProps={{
        //   startAdornment: (
        //     <InputAdornment position="start">
        //       Add a search icon here
        //     </InputAdornment>
        //   ),
        // }}
        placeholder={placeholder}
        size="medium"
      />
    </Box>
  );
};
