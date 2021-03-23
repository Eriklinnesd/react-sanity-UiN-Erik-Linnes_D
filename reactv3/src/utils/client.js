import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'nf8m7bvt',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;
