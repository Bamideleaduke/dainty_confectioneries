import * as React from "react";
import {
  AppBar,
  Box,
  useScrollTrigger,
  Slide,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Divider,
  Typography,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/Dainty-logo.svg";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

interface ScrollProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

function HideOnScroll({ children, window }: ScrollProps) {
  //   const { children, window } = Props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: { sm: "none" },
            border: "2px solid red",
            // width: "100%",
            marginTop: {
              xs: "4rem",
              sm: "",
            },
          }}
        >
          <Button
            sx={{
              border: "2px solid #000080",
              width: { sm: "100px", lg: "100px" },
              lineHeight: "0",
              padding: "1rem 0",
            }}
          >
            Login
          </Button>
          <Button
            sx={{
              marginLeft: {
                xs: "2rem",
                md: "2rem",
              },
              backgroundColor: "#000080",
              color: "#fff",
              width: { sm: "100px", lg: "100px" },
              lineHeight: "0",
              padding: "1rem 0",
            }}
          >
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{
            backgroundColor: "#f1dae4",
            boxShadow: "2px 1px 9px 0px rgba(0,0,0,0.75)",
            color: "#151218",
          }}
        >
          <Toolbar
            sx={{
              width: { xs: "90%", sm: "95%", lg: "95%" },
              marginInline: "auto",
              // padding: { sm: " 3rem 0 ", xs: "1rem 0", lg: "2.5rem 0" },
            }}
          >
            <Box
              sx={{
                flexBasis: { sm: "100%" },
                // border: { sm: "2px solid red" },
                display: { sm: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* <Box
                sx={{
                  display: { md: "flex" },
                  alignItems: "center",
                }}
              > */}
              <Box
                component="a"
                href="/"
                sx={{
                  display: { xs: "none", sm: "initial" },
                  // flexBasis: "25%"
                }}
              >
                <Box
                  src={Logo}
                  alt="logo"
                  component="img"
                  sx={{ maxHeight: { xs: "40px", sm: "35px" } }}
                />
              </Box>

              {/* </Box> */}
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {/* {navItems.map((item) => ( */}
                {/* <Button  sx={{ color: "#fff" }}>              
                </Button> */}
                {/* ))} */}
                <Box
                  component="ul"
                  sx={{
                    listStyleType: "none",
                    display: { sm: "flex" },
                    li: {
                      marginRight: {
                        sm: "0.5rem",
                        md: "1.5rem",
                      },
                    },
                    // border: "2px solid yellow",
                    width: "100%",
                  }}
                >
                  <Box component="li">
                    <Button>About us</Button>
                  </Box>
                  <Box component="li">
                    <Button
                      startIcon={<PhoneOutlinedIcon sx={{ color: "white" }} />}
                    >
                      +2348123456789
                    </Button>
                  </Box>
                  <Box component="li">
                    {/* <Button startIcon={<SearchOutlinedIcon />}>Search</Button> */}
                    <TextField
                      id="localSearch"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchOutlinedIcon />
                          </InputAdornment>
                        ),
                        placeholder: "Search",
                      }}
                      // variant="outlined"
                      sx={{
                        backgroundColor: "rgb(218, 218, 233, 47%)",
                        width: "200px",
                        borderRadius: "25px",
                        "& fieldset.MuiOutlinedInput-notchedOutline": {
                          borderColor: "rgb(218, 218, 233, 47%)",
                        },
                        ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "#000080",
                          },
                        "& .MuiOutlinedInput-root": {
                          height: "39px",
                        },
                      }}
                    />
                    {/* <TextField
                      // InputProps={{
                      //   startAdornment: (
                      //     <InputAdornment position="start">
                      //       <SearchOutlinedIcon />
                      //     </InputAdornment>
                      //   ),
                      // }}
                      size="small"
                      id="local-search"
                      placeholder="Search"
                      // label="Search field"
                      type="search"
                      variant="filled"
                      //   sx={{
                      //     // border: "2px solid red",
                      // outlineColor:"#000"

                      //   }}
                      sx={{
                        "& .MuiTextField-root": {
                          width: 200,
                        },
                        "& .MuiOutlinedInput-root": {
                          height: "39px",
                        },
                        "& .MuiOutlinedInput-input": {
                          height: "0.4rem",
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchOutlinedIcon />
                          </InputAdornment>
                        ),
                        placeholder: "Search by name",
                      }}
                    /> */}
                  </Box>
                  <Box component="li">
                    <Button endIcon={<KeyboardArrowDownOutlinedIcon />}>
                      Categories
                    </Button>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  // border: "2px solid green"
                  marginLeft: {
                    sm: "1rem",
                    md: "2rem",
                  },
                }}
              >
                <Button
                  sx={{
                    border: "2px solid #000080",
                    width: { sm: "80px", lg: "100px" },
                    lineHeight: "0",
                    padding: {xs:"0.8rem 0", md:"1rem 0"},
                  }}
                >
                  Login
                </Button>
                <Button
                  sx={{
                    marginLeft: {
                      sm: "1rem",
                      md: "2rem",
                    },
                    backgroundColor: "#000080",
                    color: "#fff",
                    width: { sm: "80px", lg: "100px" },
                    lineHeight: "0",
                    padding: {xs:"0.8rem 0", md:"1rem 0"},
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", sm: "initial" },
                display: { xs: "flex", sm: "block" },
                justifyContent: { xs: "space-between" },
                alignItems: { xs: "center" },
              }}
            >
              <Box
                component="a"
                href="/"
                sx={{
                  display: { xs: "flex", sm: "none" },
                  alignItems: "center",
                }}
              >
                <Box
                  src={Logo}
                  alt="logo"
                  component="img"
                  sx={{ maxHeight: { xs: "40px", sm: "35px" } }}
                />
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon sx={{ fontSize: "2.5rem", fontWeight: "light" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {/* <Toolbar /> */}

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
