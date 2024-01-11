import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovies] = useState([]);
  function changeSearch(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=a988d0e1&s=${search}`
        );
        const data = await response.json();
        setMovies(data.Search);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, [search]);

  return (
    <>
      <Header change={changeSearch} search={search} title="Final Project" />
      <h2 className="container text-primary mt-4">Show your favorite movies</h2>
      <main className="m-3">
        <Movie dataMovie={movie} />
      </main>
    </>
  );
}

export default App;
