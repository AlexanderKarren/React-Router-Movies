import React, { useState } from 'react';

const MovieCard = props => {
  const [movie, setMovie] = useState(props.movie);

  // useEffect(() => {
  //   const id = params.movieID;
  //   axios
  //   .get(`http://localhost:5000/api/movies/${id}`)
  //   .then(response => {
  //     setMovie(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // },[params.movieID]);

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
};

export default MovieCard;
