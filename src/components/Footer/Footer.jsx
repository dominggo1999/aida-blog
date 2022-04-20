import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import short from 'short-uuid';
import Container from '../Wrapper/Container';
import {
  FooterWrapper, FooterTop, FooterTopRight, FooterContent, Logo, FooterTextBold, Line, ContentTitle, FooterCol,
  FooterText, FooterLink,
  FooterTextSemiBold, FooterFlex, FooterBottom, FooterCopyright,

} from './Footer.style';
import { categoryColors } from '../../data/categoryColors';
import Button from '../Button/Button';
// import { categories } from '../../data/categories';
import SubscribeNewsletter from '../SubscribeNewsletter/SubscribeNewsletter';
import { scrollToTop } from '../../util/scrollToTop';
import client from '../../contentful/createClient';

const Footer = () => {
  const { brand1, gray } = categoryColors;
  const [categories, setCategories] = useState();
  const [error, setError] = useState();

  const downloadFile = () => {
    const element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent('Just a demo file')}`);
    element.setAttribute('download', 'demo-file.txt');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const getBlog = async (isSubscribed) => {
    try {
      const res = await client.getEntries({
        content_type: 'category',
        limit: 10,
      });

      const list = res.items.map((i) => i.fields.category);

      if(isSubscribed) {
        setCategories(list);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    getBlog(isSubscribed);

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <>
      <SubscribeNewsletter />
      <FooterWrapper>
        <Container>
          <FooterFlex>
            <FooterTop>
              <Logo>aida.</Logo>
              <FooterTopRight>
                <FooterTextBold>
                  All you need to start blogging
                </FooterTextBold>
                <Button
                  onClick={downloadFile}
                  bg={brand1}
                >Download
                </Button>
              </FooterTopRight>
            </FooterTop>

            <Line />

            <FooterContent>
              <FooterCol>
                <ContentTitle>
                  <FooterTextBold>About</FooterTextBold>
                </ContentTitle>
                <FooterText withPadding>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nostrum placeat vero facilis tempore maiores consequuntur! Est labore quae asperiores.</FooterText>
                <FooterTextSemiBold>Address</FooterTextSemiBold>
                <FooterText withPadding>
                  123 Main Street
                  <br />
                  New York, NY 10001
                </FooterText>
                <FooterTextSemiBold>Phone</FooterTextSemiBold>
                <FooterText>
                  (+01) 000 001 011
                </FooterText>
              </FooterCol>

              <FooterCol perFour>
                <ContentTitle>
                  <FooterTextBold>Quick Link</FooterTextBold>
                </ContentTitle>
                <Link
                  onClick={scrollToTop}
                  to="/about"
                ><FooterLink>About me</FooterLink>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="/"
                ><FooterLink>Help & Support</FooterLink>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="/"
                ><FooterLink>Licensing Policy</FooterLink>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="/"
                ><FooterLink>Refund Policy</FooterLink>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                ><FooterLink>Hire me</FooterLink>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="/contact"
                ><FooterLink>Contact</FooterLink>
                </Link>
              </FooterCol>

              <FooterCol perFour>
                <ContentTitle>
                  <FooterTextBold>Categories</FooterTextBold>
                </ContentTitle>
                {
                  !error && categories && categories.map((category) => {
                    return (
                      <Link
                        key={short.generate()}
                        to={`/blog/category/${category.toLowerCase()}`}
                      >
                        <Button
                          onClick={scrollToTop}
                          bg={gray}
                        >
                          {category}
                        </Button>
                      </Link>
                    );
                  })
                }
              </FooterCol>

            </FooterContent>

            <Line />

            <FooterBottom>
              <FooterCopyright>
                {new Date().getFullYear()} © <b>Aida</b> - Developed by &nbsp;
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/dominggo1999"
                >dominggo1999
                </a>
              </FooterCopyright>
            </FooterBottom>

          </FooterFlex>
        </Container>
      </FooterWrapper>
    </>
  );
};

export default Footer;
