import React, { useEffect, useState } from 'react'
import { getAllMovie } from '../Apis/movieApis.js';
import { Error, Wrapper } from '../components/Uis/basicUI';
const Homepage = () => {
    const [movies, setMovies] = useState([]);
    const [, setLoading] = useState(false);
    const [error, setError] = useState();
    const conc = (time) => {
        let better = '';
        for (let i = 0; i < time.length; i++) {
            better += time[i] + " ";
        }
        return better;
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await getAllMovie();
                setLoading(false);
                setMovies(data.data);
                console.log(data.data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }
        fetchData();
    }
        , []);
    console.log(`movies`, movies);

    return (
        
        <Wrapper>
            <h1>Movie ratings</h1>
            {
                error ? (<Error>{error}</Error>)
                    :
                    (
                        <table>
                            <tr><th>Movie Name</th><th>Movie rating</th> <th>Movie Time</th></tr>
                            {movies.map((e) => (
                                <tr><td>{e.name}</td><td>{e.rating}</td><td>{conc(e.time)}</td></tr>
                            ))}
                        </table>
                    )
            }
        </Wrapper>
    )
}

export default Homepage

