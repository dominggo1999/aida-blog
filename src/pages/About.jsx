import React from 'react';
import { SpaceTop } from '../components/Wrapper/SpaceTop';
import PageHeader from '../components/PageHeader/PageHeader';
import AboutMe from '../components/AboutMe/AboutMe';
import useDocumentTitle from '../hooks/useDocumentTitle';

const About = () => {
  useDocumentTitle('about');

  return (
    <>
      <SpaceTop />
      <PageHeader title="About Me" />
      <AboutMe />
    </>
  );
};

export default About;
