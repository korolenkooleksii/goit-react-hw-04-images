import axios from 'axios';

const ENDPOINT = 'https://pixabay.com/api/';
const KEY = '33551348-9d68666fc5ce894df97e3b30d';

axios.defaults.baseURL = `${ENDPOINT}`;
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (page, searchQuery) => {
  const {
    data: { hits, totalHits },
  } = await axios.get(`?q=${searchQuery}&page=${page}`);

  return { hits, totalHits };
};


