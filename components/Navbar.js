import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreIcon from "@mui/icons-material/MoreVert";
import Link from "next/link";
import Image from "next/image";
import { Button, Grid } from "@mui/material";
import { Container } from "@mui/system";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "24px",
  backgroundColor: "rgba(23, 10, 60, 0.05)",
  marginRight: theme.spacing(2),
  // marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(3),
  },
}));

//xs = xtra small
//sm = small
//md = medium
//lg = large
//xl = x large

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000",
  "& .MuiInputBase-input": {
    // "&::placeholder": {
    //   color: "red",
    // },
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderWidth: 0,
  ":hover": {
    borderWidth: 0,
  },
}));

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p
          style={{
            fontFamily: "SF",
          }}
        >
          Notifications
        </p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // const useStyles = makeStyles({
  //   flexGrow: {
  //     flex: "1",
  //   },
  //   button: {
  //     backgroundColor: "#3c52b2",
  //     color: "#fff",
  //     "&:hover": {
  //       backgroundColor: "#fff",
  //       color: "#3c52b2",
  //     },
  //   },
  // });

  return (
    <>
      <AppBar
        position="sticky"
        style={{ backgroundColor: "#fff" }}
        sx={{
          height: "83px",
          justifyContent: "center",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          {/* <div style={{ maxWidth: "95%" }}> */}
          {/* <Container maxWidth="xl"> */}
          <Grid container alignItems={"center"}>
            <Grid item xs={1} align="center">
              <Link href="/">
                <a>
                  <Image
                    src="/logo.svg"
                    width="100px"
                    height="48px"
                    alt="logo"
                  />
                </a>
              </Link>
            </Grid>
            <Grid item xs={2} align="center">
              <StyledButton variant="outlined">AHMED</StyledButton>
              <StyledButton variant="outlined">AHMED</StyledButton>
            </Grid>
            <Grid item xs={4} align="center">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon htmlColor="rgba(23, 10, 60, 0.3)" />
                </SearchIconWrapper>
                <StyledInputBase
                  fullWidth
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Grid>
            <Grid item xs={4} md={3} lg={2} align="center">
              <StyledButton variant="outlined">AHMED</StyledButton>
              <StyledButton variant="outlined">AHMED</StyledButton>
            </Grid>
            <Grid item xs={1} lg={3} align="center">
              <Box
                sx={{
                  display: { xs: "none", lg: "initial" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="primary"
                >
                  <Badge badgeContent={17} color="error">
                    <NotificationsIcon htmlColor="#b9b5c4" />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <FavoriteIcon htmlColor="#b9b5c4" />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge
                    badgeContent={17}
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#d82054",
                      },
                    }}
                  >
                    <ShoppingCartIcon htmlColor="#b9b5c4" />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle htmlColor="#b9b5c4" />
                </IconButton>
              </Box>
              <Box sx={{ display: { xs: "flex", lg: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon htmlColor="#b9b5c4" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          {/* </Container> */}
        </Toolbar>
      </AppBar>
      {/* <Container>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle htmlColor="#b9b5c4" />
        </IconButton>
      </Container> */}
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};

// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import Link from "next/link";
// import Image from "next/image";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// export const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar color="primary" position="sticky">
//       <Container maxWidth="lg">
//         <Toolbar disableGutters>
//           <Link href="/">
//             <a className="navbar-brand d-flex align-items-center">
//               <Image src="/logo.svg" width="100px" height="48px" alt="logo" />
//             </a>
//           </Link>

//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}

//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// -----------
