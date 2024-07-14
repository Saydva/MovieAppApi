import React, { useState } from "react";
import { useEffect } from "react";
import Movie from "./MovieCard";

import SearchIcon from "./search.png";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=a3e87b68";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies([]);
  }, []);

  // function handleKeyDown(event) {
  //   if (event.keyCode === 13) {
  //     alert("Enter key was pressed");
  //   }
  // }

  return (
    <div className="App">
      <h1>Movie search</h1>
      <div className="Search">
        <input
          placeholder="search for Movie title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(event) =>
            event.keyCode === 13 && searchMovies(searchTerm)
          }
        />
        {/* <img
          className="search_button"
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        /> */}
        <img
          className="search_button"
          src="https://cdn-icons-png.flaticon.com/128/667/667383.png"
          data-src="https://cdn-icons-png.flaticon.com/128/667/667383.png"
          alt="Search"
          title="Search"
          srcset="https://cdn-icons-png.flaticon.com/128/667/667383.png 6x"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
