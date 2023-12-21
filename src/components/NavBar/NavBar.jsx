

import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../../assets/logo.png";
import style from "../NavBar/NavBar.module.css";
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Inicio', 'Servicios'];

function DrawerAppBar(props) {
  const { window, isDarkMode, handleDarkMode, id } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
     <Typography variant="h6" sx={{ my: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Logo" style={{ marginRight: '8px', width: '50px', clipPath: 'circle(40%)', backgroundColor: "white" }} />
        <span style={{ color: isDarkMode ? 'white' : 'black' }}>Grosgar</span>
      </div>
    </Typography>


      <Divider />
      <List>
        {navItems.map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="nav-link active">
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box id= {id} sx={{display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav"
        sx={{
          backgroundColor: isDarkMode ? '#333' : '#fff', // Cambia el color de fondo según el modo oscuro
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', sm: 'block', color: "black" },
              fontSize: '35px',
              padding: "10px",
            }}
          >
           <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ marginRight: '8px', width: "76px", backgroundColor: "white", clipPath: "circle(40%)" }} />
          <span style={{ color: isDarkMode ? 'white' : 'black' }}>Grosgar</span>
            
          </div>
          </Typography>
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: 'black' }}>
            <Link to={`/${item.toLowerCase()}`} className="nav-link active">
              {/* Ajusta el contenido del botón según tu necesidad */}
              <button type="button" className="btn btn-light">
                {item}
              </button>
            </Link>
            </Button>
          ))}
        </Box>
        <button
          type="button"
          className={`btn btn-dark ${style.darkMode}`}
          onClick={handleDarkMode}
        >
          {isDarkMode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
        </button>

        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: isDarkMode ? '#333' : '#fff', color: isDarkMode ? 'white' : 'black' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
// import React, { useState } from 'react'
// 
// 
// import { Link } from 'react-router-dom';
// import AnchorLink from 'react-anchor-link-smooth-scroll';


// function NavBar({isDarkMode, handleDarkMode}) {



//   return (
  
//   <div className={isDarkMode ? `navbar navbar-expand-lg ${style.dark}` :`navbar navbar-expand-lg  ${style.nav}`}  >
//   <div className={`container-fluid ${style.containerContent}`}>
//     <div className={isDarkMode ? `${style.dark1}` : `${style.title}`  }>
//       <img src={logo} alt="logo" />
//       <h1>GrosGar</h1>
//     </div>
//     <button className={isDarkMode ? `navbar-toggler ${style.dark2}` : `navbar-toggler ${style.hamburguer}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//   <div className={`collapse navbar-collapse ${style.containerButtons}`} id="navbarSupportedContent">
//     <div className={`collapse navbar-collapse ${style.buttons}`} id="navbarSupportedContent">
//     <button type="button" className={`btn btn-dark ${style.darkMode}`} onClick={handleDarkMode}>
//       {isDarkMode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-stars-fill"></i>}
//         </button>

//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <Link to="/">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#"><button type="button" className="btn btn-light">Inicio</button></a>
//             </li>
//           </Link>

//           <Link to="/services">
//             <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#"> <button type="button" className="btn btn-light">Servicios</button></a>
//             </li>
//           </Link>

//          
//         </ul>
//       </div>
//     </div>
//   </div>
// </div>
    
//   )
// }

// export default NavBar;