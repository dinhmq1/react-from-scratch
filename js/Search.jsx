import React from 'react';
import preload from '../data.json';

const Search = () => (
    <div className='search'>
        {preload.shows.map(show => <h1>{show.title}</h1>)}
    </div>
);

export default Search;