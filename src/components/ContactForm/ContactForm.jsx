import Container from '../Wrapper/Container';
import Input from '../Input/Input';
import {
  ContactWrapper, Form, ContactTitle, FormTop, FormBottom,
} from './ContactForm.style';
import { Wrapper } from '../Wrapper/Wrapper';
import Button from '../Button/Button';

const ContactForm = () => {
  return (
    <Wrapper brand4>
      <Container>
        <ContactWrapper>
          <ContactTitle>
            Get in Touch
          </ContactTitle>
          <Form>
            <FormTop>
              <Input>
                <input
                  required
                  type="text"
                  placeholder="Name"
                />
              </Input>
              <Input>
                <input
                  required
                  type="email"
                  placeholder="Email"
                />
              </Input>
            </FormTop>
            <FormBottom>
              <Input>
                <textarea
                  required
                  placeholder="Message"
                />
              </Input>
            </FormBottom>
            <Button nav>Submit</Button>
          </Form>
        </ContactWrapper>
      </Container>
    </Wrapper>
  );
};

export default ContactForm;
