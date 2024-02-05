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
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo2 from "../../assets/Dainty-logo.svg";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import {
  CartIcon,
  DaintyLogo,
  ProfileIcon,
  SearchIcon,
} from "../../assets/icons/Icons";
import { Button } from "./buttons/Buttons";
import { Colors } from "../../constants/colors";
import { RouteList } from "../../constants/routes";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import BasicPopover from "./popover/Popover";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux-hook";
import { logOut } from "../../utils/redux/features/AuthSlice";
import Dialog from "./dialogs/Dialog";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";

interface ScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}
interface Props {
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
const navData = [
  { id: 1, link: "Home", path: RouteList.LANDING },
  { id: 2, link: "About us", path: RouteList.ABOUT },
  { id: 4, link: "Contact", path: "#" },
  { id: 5, link: "Search", path: "#" },
  // { id: 6, link: "Categories", path: "..." },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [openSignup, setOpenSignup] = React.useState(false);
  const [activePage, setActivePage] = React.useState("");
  const location = useLocation();
  const user = localStorage.getItem("user");
  const dispatch = useAppDispatch();
  const order = useAppSelector((state) => state.cakeData?.order);
  
  useEffect(() => {
    const currentPage = location.pathname === "/" ? "Home" : "Other";
    setActivePage(currentPage);
  }, [location]);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogOut = () => {
    // (window as any).location.reload(false);
    dispatch(logOut());
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
      }}
    >
      <Box my={4}>
        <List>
          {navData.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                {item.link === "Search" ? (
                  <TextField
                    id="localSearch1"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                      placeholder: "Search",
                    }}
                    sx={{
                      backgroundColor: "rgb(218, 218, 233, 47%)",
                      width: { sm: "150px", md: "200px" },
                      borderRadius: "25px",
                      "& fieldset.MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgb(218, 218, 233, 47%)",
                      },
                      ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: "#000080",
                        },
                      "& .MuiOutlinedInput-root": {
                        height: { xs: "35px" },
                      },
                    }}
                  />
                ) : item.link === "Categories" ? (
                  <Button
                    variant="text"
                    endIcon={<KeyboardArrowDownOutlinedIcon />}
                    sx={{ fontSize: { sm: "0.9rem", md: "initial" } }}
                  >
                    Categories
                  </Button>
                ) : (
                  <ListItemText primary={item.link} />
                )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
            justifyContent: "center",
            marginTop: {
              xs: "4rem",
              sm: "",
            },
          }}
        >
          <Button
            sx={{
              // border: "2px solid #000080",
              backgroundColor: Colors.Primary,
              // width: { sm: "100px", lg: "100px" },
              // lineHeight: "0",
              padding: "0.5rem 1rem",
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
              backgroundColor: Colors.Primary,
              color: "#fff",
              // width: { sm: "100px", lg: "100px" },
              // lineHeight: "0",
              padding: "0.5rem 1rem",
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
            backgroundColor:
              activePage === "Home" ? Colors.Secondary : Colors.White,
            boxShadow: "2px 1px 9px 0px rgba(0,0,0,0.75)",
            color: "#151218",
          }}
        >
          <Toolbar
            sx={{
              width: { xs: "90%", sm: "90%", lg: "90%" },
              marginInline: "auto",
            }}
          >
            <Box
              sx={{
                flexBasis: { sm: "100%" },
                display: { sm: "flex" },
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="a"
                href="/"
                sx={{
                  display: { xs: "none", sm: "initial" },
                  // flexBasis: "25%"
                }}
              >
                <DaintyLogo
                  sx={{
                    maxHeight: { xs: "40px", sm: "35px" },
                    fontSize: "2.3rem",
                  }}
                />
              </Box>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Box
                  component="ul"
                  sx={{
                    listStyleType: "none",
                    display: { sm: "flex" },
                    alignItems: "center",
                    li: {
                      marginRight: {
                        sm: "0.5rem",
                        md: "2.5rem",
                      },
                    },
                    width: "100%",
                  }}
                >
                  {navData.map((item) => {
                    return (
                      <Box
                        key={item.id}
                        component="li"
                        onClick={() => setActivePage(item.link)}
                      >
                        {item.link === "Search" ? (
                          <TextField
                            id="localSearch2"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon />
                                </InputAdornment>
                              ),
                              placeholder: "Search",
                            }}
                            sx={{
                              backgroundColor: "rgb(218, 218, 233, 47%)",
                              width: { sm: "150px", md: "200px" },
                              borderRadius: "25px",
                              "& fieldset.MuiOutlinedInput-notchedOutline": {
                                borderColor: "rgb(218, 218, 233, 47%)",
                              },
                              ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "#000080",
                                },
                              "& .MuiOutlinedInput-root": {
                                height: { sm: "30px", md: "39px" },
                              },
                            }}
                          />
                        ) : item.link === "Categories" ? (
                          <Button
                            variant="text"
                            endIcon={<KeyboardArrowDownOutlinedIcon />}
                            sx={{ fontSize: { sm: "0.9rem", md: "initial" } }}
                          >
                            Categories
                          </Button>
                        ) : (
                          <Box
                            component={Link}
                            to={item.path}
                            sx={{
                              textDecoration: "none",
                              color: Colors.Black,
                              fontSize: { sm: "0.9rem", md: "initial" },
                            }}
                          >
                            {item.link}
                          </Box>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </Box>

              {!user ? (
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    marginLeft: {
                      sm: "1rem",
                      md: "2rem",
                    },
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ fontSize: "0.9rem" }}
                    onClick={() => {
                      // navigate("/login");
                      setOpen(true);
                    }}
                  >
                    Login
                  </Button>
                  <Dialog
                    open={open}
                    minWidth={"max-content"}
                    minHeight={"max-content"}
                    handleClose={() => setOpen(false)}
                    children={<LoginForm setOpen={setOpen} />}
                  />
                  <Button
                    size="small"
                    sx={{
                      marginLeft: {
                        sm: "1rem",
                        md: "1rem",
                      },
                    }}
                    onClick={() => {
                      // navigate("/sign-up");
                      setOpenSignup(true);
                    }}
                  >
                    Signup
                  </Button>
                  <Dialog
                    open={openSignup}
                    minWidth={"max-content"}
                    minHeight={"100%"}
                    handleClose={() => setOpenSignup(false)}
                  >
                    <SignUpForm setOpenSignup={setOpenSignup} />
                  </Dialog>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    alignItems: "center",
                    marginLeft: {
                      sm: "1rem",
                      md: "2rem",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "start",
                      position: "relative",
                      marginRight: "3rem",
                    }}
                  >
                    <CartIcon />

                    <Typography
                      sx={{ position: "absolute", top: "-10px", left: "26px" }}
                    >
                      {order.length}
                    </Typography>
                  </Box>
                  <BasicPopover
                    content={
                      <Typography
                        sx={{ cursor: "pointer" }}
                        onClick={() => handleLogOut()}
                      >
                        Log out
                      </Typography>
                    }
                    btnContent={<ProfileIcon />}
                  />
                </Box>
              )}
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
                component={Link}
                to={RouteList.LANDING}
                sx={{
                  display: { xs: "flex", sm: "none" },
                }}
              >
                <Box component="img" src={Logo2} alt="logo" />
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

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
