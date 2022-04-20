import React, { useState, useRef, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { nopeResolver } from '@hookform/resolvers/nope';
import Nope from 'nope-validator';
import Container from '../Wrapper/Container';
import {
  SubscribeNewsLetterWrapper, Content, ContentTop, SubscribeText, NewsletterText, ContentBottom, SuccessMessage,
} from './SubscibeNewsletter.style';
import Button from '../Button/Button';

const SubscribeNewsletter = () => {
  const schema = Nope.object().shape({
    email: Nope.string()
      .email('Invalid email format')
      .required('Required'),
  });

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
    <SubscribeNewsLetterWrapper id="newsletter-form">
      <Container>
        <Content>
          <ContentTop>
            <SubscribeText>
              <FiSend />
              Subscribe
            </SubscribeText>
            <NewsletterText>
              To Our Newsletter
            </NewsletterText>
          </ContentTop>
          <ContentBottom>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register('email')}
                type="email"
                required
                autoComplete="off"
                spellCheck="off"
                placeholder="Enter your email"
              />
              <div>
                <Button
                  nav
                  type="submit"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </ContentBottom>

          {
            success && (
              <SuccessMessage>Thank you for your subscribing</SuccessMessage>
            )
          }
        </Content>
      </Container>
    </SubscribeNewsLetterWrapper>
  );
};

export default SubscribeNewsletter;
