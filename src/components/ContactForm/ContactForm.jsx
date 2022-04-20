import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { nopeResolver } from '@hookform/resolvers/nope';
import Nope from 'nope-validator';
import Container from '../Wrapper/Container';
import Input from '../Input/Input';
import {
  ContactWrapper, Form, ContactTitle, FormTop, FormBottom, ErrorMessage, FormActions,
} from './ContactForm.style';
import { Wrapper } from '../Wrapper/Wrapper';
import Button from '../Button/Button';

const schema = Nope.object().shape({
  name: Nope.string()
    .min(3, 'At least 3 characters')
    .required('Required'),
  email: Nope.string()
    .email('Invalid email format')
    .required('Required'),
  message: Nope.string()
    .min(3, 'must be longer than 3 characters')
    .max(500, 'must be shorter than 500 characters')
    .required('Required'),
});

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const messageTimerRef = useRef();
  const {
    register, handleSubmit, formState: { errors }, reset,
  } = useForm({
    resolver: nopeResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);

    reset();

    setSuccess(true);
    messageTimerRef.current = setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      clearInterval(messageTimerRef.current);
    };
  }, []);

  return (
    <Wrapper brand4>
      <Container>
        <ContactWrapper>
          <ContactTitle>
            Get in Touch
          </ContactTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTop>
              <Input>
                <input
                  {...register('name')}
                  required
                  type="text"
                  placeholder="Name"
                  autoComplete="off"
                  spellCheck="off"
                />
                {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
              </Input>
              <Input>
                <input
                  placeholder="Email"
                  {...register('email')}
                  type="email"
                  required
                  autoComplete="off"
                  spellCheck="off"
                />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
              </Input>
            </FormTop>
            <FormBottom>
              <Input>
                <textarea
                  {...register('message')}
                  required
                  placeholder="Message"
                  type="text"
                  autoComplete="off"
                  spellCheck="off"
                />
                {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
              </Input>
            </FormBottom>
            <FormActions>
              <Button nav>Submit</Button>
              {
                success && (
                  <p>Thank you for your message</p>
                )
              }
            </FormActions>
          </Form>
        </ContactWrapper>
      </Container>
    </Wrapper>
  );
};

export default ContactForm;
