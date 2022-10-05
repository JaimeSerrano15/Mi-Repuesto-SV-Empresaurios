import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Button, Typography } from "@mui/material/";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));


export const FilterMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (order) => {
    setAnchorEl(null);
    setFilter(order);
  };

  const { filter, setFilter, options, title = "Sort by" } = props;

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        sx={{
          backgroundColor: "#F8FAFB",
          borderRadius: "10px",
          border: '1px solid gray',
          color: "#7E7E7E",
          py: 1,
          px: 2,
          mr: 3,
        }}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <Typography
          variant="body2"
          fontWeight="medium"
          color="#3D3C42"
          sx={{
            ml: 1,
            textTransform: "capitalize",
          }}
        >
          {title}: {filter}
        </Typography>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose(filter)}
      >
        {options.map((option, i) => (
          <MenuItem key={i} onClick={() => handleClose(option)} disableRipple>
            <Typography
              variant="body1"
              sx={{
                textTransform: "capitalize",
              }}
            >
              {option}
            </Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};
