// Fetching of data page

import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;
console.log(API_KEY);



const Home = async({ searchParams }) => {
  const genre = searchParams.genre || 'fetchTrending';
  const endpoint = genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week';
  const url = `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      const errorData = await res.json();
      console.error('API Error:', errorData);
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const results = data.results;
    // console.log(results);

    return (
      <div>
        <Results results={results}/>
      </div>
    );

  } catch (error) {
    console.error('Error:', error.message);
    return (
      <div>
        An error occurred while fetching data.
      </div>
    );
  }
};

export default Home;
