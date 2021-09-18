import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  NavlinksFlex,
  NavlinksWrapper,
  NavItemLeft,
  MenuButton,
  SearchIcon,
} from './Navlink.style';
import navlinks from '../../constants/navlinks';
import Button from '../Button/Button';
import { scrollToTop } from '../../util/scrollToTop';

const Navlinks = ({ openSideNavbar }) => {
  return (
    <>
      <MenuButton>
        <SearchIcon>
          <BiSearchAlt2 />
        </SearchIcon>
        <Button
          nav
          onClick={openSideNavbar}
        >
          Menu
        </Button>
      </MenuButton>
      <NavlinksFlex>
        <NavlinksWrapper>
          {
            navlinks.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={scrollToTop}
              >
                <NavItemLeft>{item.name}</NavItemLeft>
              </Link>
            ))
          }
        </NavlinksWrapper>
        <NavlinksWrapper>
          <SearchIcon>
            <BiSearchAlt2 />
          </SearchIcon>
          <Button nav>
            Subscribe
          </Button>
        </NavlinksWrapper>
      </NavlinksFlex>
    </>
  );
};

export default Navlinks;
