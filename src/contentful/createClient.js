import { createClient } from 'contentful';

const client = createClient({
  accessToken: import.meta.env.VITE_APP_CONTENTFUL_AIDA_API_KEY,
  space: import.meta.env.VITE_APP_CONTENTFUL_SPACE_AIDA,
});

export default client;
