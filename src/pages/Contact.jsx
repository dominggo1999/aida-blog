import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import PageHeader from '../components/PageHeader/PageHeader';
import { SpaceTop } from '../components/Wrapper/SpaceTop';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Contact = () => {
  useDocumentTitle('Contact');

  return (
    <>
      <SpaceTop />
      <PageHeader title="Contact" />
      <ContactForm />
    </>
  );
};

export default Contact;
