import { createClient } from 'contentful';

const client = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_AIDA_API_KEY,
  space: process.env.REACT_APP_CONTENTFUL_SPACE_AIDA,
});

export default client;
