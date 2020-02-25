import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/">
        <MovieList addToSavedList={addToSavedList}/>
      </Route>
      <Route path="/movies/:movieID">
        <MovieList addToSavedList={addToSavedList}/>
      </Route>
    </div>
  );
};

export default App;
