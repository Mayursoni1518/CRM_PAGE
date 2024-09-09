import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
}); 


const getDummyData = async () => {
  try {
    const response = await api.get('/posts');
    const data = response.data.slice(0, 6); // Get the first 6 posts
    const pieData = data.map((post, index) => ({
      name: `Month ${index + 1}`,
      value: post.id * 100, // Assign a dummy value
    }));
    return pieData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getDummyData };