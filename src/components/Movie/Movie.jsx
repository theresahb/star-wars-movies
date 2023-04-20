import React from 'react';
import './movie.css';

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}

const Movie = ( {film} ) => {
    const formattedDate = formatDate(film.release_date);

    const moreInfo  = 'More Info'

    return (
        <div className='movie'>
            <div className="title">
                <h2><a href="/">{film.title}</a></h2>
                <p>{formattedDate}</p>
            </div>
            <div className="opening">
                <p>{film.opening_crawl}</p>
            </div>
            <p className='info'>
                <a href="/">{moreInfo}</a>
            </p>
        </div>
    )
}

export default Movie