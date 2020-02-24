import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieList = props => {
  const [movies, setMovies] = useState([])
  const params = useParams();

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {movies.map(movie => {
        if (params.movieID === undefined) {
          return <MovieCard key={movie.id} movie={movie} />
        }
        else {
          console.log(params.movieID);
          console.log(movie.id);
          if (params.movieID === `${movie.id}`) {
            return <MovieCard key={movie.id} movie={movie} />
          }
        }
      })}
    </div>
  );
}

export default MovieList;
