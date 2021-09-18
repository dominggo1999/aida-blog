import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Container from '../Wrapper/Container';
import {
  NavbarWrapper, NavLogo, NavbarFlex,
} from './Navbar.style';
import Navlinks from '../Navlinks/Navlinks';
import Backdrop from '../Backdrop/Backdrop';
import SideNavbar from '../SideNavbar/SideNavbar';
import { breakpoints } from '../../constants/tailwindBreakpoint';
import { scrollToTop } from '../../util/scrollToTop';

const Navbar = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  const openSideNavbar = () => {
    setShowSideNavbar(true);
  };

  const closeSideNavbar = () => {
    setShowSideNavbar(false);
  };

  useEffect(() => {
    let pScroll = prevScroll;
    let initial = true;
    const toggleNavbarOnScroll = (e) => {
      const currentScroll = window.pageYOffset;

      if(initial) {
        setShowNavbar(true);
        initial = false;
      }else{
        if(currentScroll <= pScroll) {
          setShowNavbar(true);
        } else if (currentScroll > pScroll) {
          setShowNavbar(false);
        }
        pScroll = currentScroll;
        setPrevScroll(pScroll);
      }
    };

    const closeSidebarOnLargeScreen = (e) => {
      if(window.innerWidth >= breakpoints.sm) {
        closeSideNavbar();
      }
    };

    window.addEventListener('resize', closeSidebarOnLargeScreen);
    window.addEventListener('scroll', toggleNavbarOnScroll);

    return () => {
      window.removeEventListener('resize', closeSidebarOnLargeScreen);
      window.removeEventListener('scroll', toggleNavbarOnScroll);
    };
  }, []);

  return (
    <>
      {/* Backdrop and sidebar only shown if showSideNavbar is true */}
      {showSideNavbar && (
      <Backdrop
        handleClose={closeSideNavbar}
        open={showSideNavbar}
      />
      )}
      <SideNavbar
        handleClose={closeSideNavbar}
        open={showSideNavbar}
      />

      <NavbarWrapper showNavbar={showNavbar}>
        <Container>
          <NavbarFlex>
            <Link
              onClick={scrollToTop}
              to="/"
            >
              <NavLogo>
                aida.
              </NavLogo>
            </Link>
            <Navlinks openSideNavbar={openSideNavbar} />
          </NavbarFlex>
        </Container>
      </NavbarWrapper>
    </>
  );
};

export default Navbar;
