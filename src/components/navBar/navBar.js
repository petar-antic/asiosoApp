import React, { useEffect, useState } from 'react';

import logo from '../../assets/images/logo.png';
import classes from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 1024 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <nav>
      <NavLink to="/" className="text-decoration-none">
        {size.width < 768 ? (
          <img src={logo} alt="Logo" width={80} />
        ) : (
          <img src={logo} alt="Logo" width={100} />
        )}
      </NavLink>

      <div
        className={`${classes.navMenu} ${
          menuOpen && size.width < 1024 ? classes.isMenu : ''
        }`}
      >
        <ul>
          <li>
            <NavLink to="/" className="text-decoration-none">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-decoration-none">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-decoration-none">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="text-decoration-none">
              Contact
            </NavLink>
          </li>
          <li className={classes.telephone}>
            <i className="bi bi-telephone-fill"></i>
            <a href="4989954570610">49 89 - 9 54 57 06 10</a>
          </li>
        </ul>
      </div>
      <div className={classes.navIcon}>
        {!menuOpen ? (
          <i className="bi bi-filter-right" onClick={menuToggleHandler} />
        ) : (
          <i className="bi bi-x" onClick={menuToggleHandler} />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
