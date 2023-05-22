import React from 'react';
import './movie.css';
import { Link } from 'react-router-dom';



function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

const Movie = ( {film, index} ) => {
    const formattedDate = formatDate(film.release_date);

    const moreInfo  = 'More Info'

    return (
        <div className='movie'>
            <div className="movie-title">
                <h2><a href="/">{film.title}</a></h2>
                <p>{formattedDate}</p>
            </div>
            <div className="opening">
                <p>{film.opening_crawl}</p>
            </div>
            <Link to={`/movie/` + (index + 1)} className='movie-link'>
                <p className='info'>{moreInfo}</p>
            </Link>
        </div>
    )
}

export default Movie

