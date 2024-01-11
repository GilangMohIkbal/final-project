// import { useDispatch, useSelector } from "react-redux";
// import { addListMovie } from "../redux/getMovie";
// import { useEffect, useState } from "react";

export default function Movie(props) {
  //   const [movie, setMovies] = useState([]);
  //   const dispatch = useDispatch();
  //   const listMovie = useSelector((state) => state.movie.items);
  //   console.log(listMovie);

  //   useEffect(() => {
  //     const fetchMovie = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://www.omdbapi.com/?apikey=a988d0e1&s=${props.dataMovie}`
  //         );
  //         const data = await response.json();
  //         setMovies(data.Search);

  //         dispatch(addListMovie(data));
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchMovie();
  //   }, [search]);

  return (
    <div className="container w-100 h-100 d-flex flex-wrap">
      {props.dataMovie?.map((movie, i) => {
        return (
          <div className="card m-2" key={i}>
            <img src={movie.Poster} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
