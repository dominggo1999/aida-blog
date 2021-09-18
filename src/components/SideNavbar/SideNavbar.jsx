import { Link } from 'react-router-dom';
import { CgClose } from 'react-icons/cg';
import React from 'react';
import { SideNavbarWrapper, NavItem, CloseButton } from './SideNavbar.style';
import navlinks from '../../constants/navlinks';
import Button from '../Button/Button';
import { scrollToTop } from '../../util/scrollToTop';

const SideNavbar = ({ open, handleClose }) => {
  return (
    <SideNavbarWrapper open={open}>
      <CloseButton onClick={handleClose}>
        <CgClose />
      </CloseButton>
      {
        navlinks.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={scrollToTop}
          >
            <NavItem onClick={handleClose}>{item.name}</NavItem>
          </Link>
        ))
      }
      <Button white>
        Subscribe
      </Button>
    </SideNavbarWrapper>
  );
};

export default SideNavbar;
