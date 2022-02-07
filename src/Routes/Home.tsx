import { useQuery } from 'react-query';
import { getMovies } from '../api';

function Home() {
    const { data, isLoading } = useQuery("getMovies", getMovies);
    console.log(data, isLoading);

    return <h1 style={{height: 800}}>Home</h1>;
}

export default Home;