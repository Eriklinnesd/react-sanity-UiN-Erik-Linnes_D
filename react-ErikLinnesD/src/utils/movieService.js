import client from './client';

const movieFields = `
    title, 
    'actor': actor -> title,
`;

const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`);
  return data;
};

export default getMovies;
