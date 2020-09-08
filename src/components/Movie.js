import React from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year,title,summary,poster,genres}){
    return ( 
        <Link to = {{
            pathname : "/movie-detail",
            state : {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className = "movie">
            <img src={poster} alt = {title} title = {title} />
            <div className = "movie__data">
                <h3 className = "movie__title">{title}</h3>
                <h5 className = "movie__year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genre,index) => (
                        <li key = {index} className="genres__genre">
                            {genre}
                        </li>
                    ))}
                </ul>
                <p className = "movie__summary">{summary.slice(0,140)}...</p>
            </div>
        </div>
    </Link>
    );
};

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
  };

export default Movie;