import axios from 'axios';

axios.defaults.baseURL = 'https://dummyjson.com/comments';

export async function getAllComments() {
  const result = await axios.get();
  return result;
}
