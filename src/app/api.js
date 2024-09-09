const api = {
  async get(url) {
    try {
      const response = await fetch(`${'https://jsonplaceholder.typicode.com'}/${url}`);
      return response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

export { api };
const getDummyData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const pieData = data.slice(0, 6).map((post, index) => ({
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
