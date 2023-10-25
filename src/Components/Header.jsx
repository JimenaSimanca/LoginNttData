import React, { useContext } from 'react';
import { AuthContext } from '../Components/utils/AuthContext';
// import Profile from '../Components/Profile';
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import { Slide } from '@mui/material';
// import '../Styles/Header.css';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}



ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = () => {
  const { user, rol } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      label: 'Iniciar sesión',
      link: '/login',
      condition: rol.code !== 'REGISTERED' && rol.code !== 'NO REGISTERED',
    },
    {
      label: 'Dashboard',
      link: '/dashboard',
      condition: rol.code === 'REGISTERED',
    },
  ];

  return (
    <>
      <React.Fragment>
        <ElevationScroll>
          <AppBar color="header">
            <header className="header">
              <div className="logo">
                <Link to={'/'}>
                  <img src="https://spa-e3-imagenes.s3.us-east-2.amazonaws.com/samsara.png" alt="samsara" border="0"/>
                </Link>
              </div>
              <Toolbar>
              <nav className="navbar">
              {(rol.code !== "REGISTERED" && rol.code !== "NO REGISTERED") && (
                <Link to="/login">
                  <button className="secondary-button primary-text-button register" >Iniciar sesión</button>
                </Link>
              )}

              {rol.code === "REGISTERED" && (
                <Link to={"/dashboard"}>
                  <button className="secondary-button primary-text-button login" >Dashboard</button>
                </Link>
              )}
            </nav>
              <div className='mobile'>
                  <IconButton
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    onClick={handleMenuOpen}
                    
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="header-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    
                  >
                    {menuItems.map((item, index) => (
                      item.condition && (
                        <MenuItem key={index} component={Link} to={item.link} onClick={handleMenuClose}>
                          {item.label}
                        </MenuItem>
                      )
                    ))}
                  </Menu>
                </div>
              </Toolbar>
            </header>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
      </React.Fragment>
      <Outlet />
    </>
  );
};

export default Header;