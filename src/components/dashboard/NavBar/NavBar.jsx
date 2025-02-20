import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Container, Menu, MenuItem, Tooltip } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import useAuthStore from "../../../stores/auth.store";

const drawerWidth = 240;
const navItems = ["Inicio", "Nosotros"];

function DrawerAppBar(props) {
  const { window, id } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
console.log(user);

  const token = localStorage.getItem("token");

  const settings = token
    ? [{ label: "Cerrar sesión", action: () => handleLogout() }]
    : [{ label: "Iniciar sesión", action: () => navigate("/auth/login") }];

 // Obtener la inicial del usuario si existe
 const userInitial = user?.firstName ? user.firstName.charAt(0).toUpperCase() : <FaUserCircle size={45}/>;

  const handleLogout = () => {
    localStorage.removeItem("token");
    logout();
    navigate("/auth/login");
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        color: "white",
        backgroundColor: "var(--secondary-color)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              marginRight: "8px",
              width: "250px",
            }}
          />
        </div>
      </Typography>

      <Divider />
      <List>
        {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="nav-link active"
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box id={id} sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "var(--primary-color)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar className="max-w-[1350px] w-full m-auto">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "white" }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block", color: "black" },
                fontSize: "35px",
                padding: "10px",
                backgroundColor: "var(--primary-color)",
              }}
            >
              <div>
                <img src={logo} alt="Logo" className="w-[250px]" />
              </div>
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "5px" }}>
              {navItems.map((item) => (
                <Button
                  variant="text"
                  key={item}
                  onClick={() => navigate(item.toLowerCase())}
                  sx={{
                    color: "white",
                    position: "relative",
                    borderRadius: "0px",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "2px",
                      backgroundColor: "white",
                      bottom: -2,
                      left: 0,
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease-in-out",
                    },
                    borderBottom:
                      location.pathname === `/${item.toLowerCase()}`
                        ? "2px solid white"
                        : "2px solid transparent",
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
            <Box className="w-full flex justify-end xs:w-auto xs:block">
              <Tooltip title="Abrir menú">
                <div className="flex flex-col items-center gap-2 ml-3">

                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user?.profileImage ? (
                    <Avatar src={user.profileImage} alt={user.firstName} />
                  ) : (
                    <Avatar sx={{ bgcolor: "gray", width: 40, height: 40, fontSize: 18 }}>
                      {userInitial}
                    </Avatar>
                  )}
                </IconButton>

              {user && (
                <p className="hidden xs:block text-white text-xs">
                  ¡Hola {user.firstName}!
                </p>
              )}
              </div>
              </Tooltip>
              <Menu
                disableScrollLock
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting.label} onClick={setting.action}>
                    <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
                      {setting.label}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
  id: PropTypes.string,
};

export default DrawerAppBar;
