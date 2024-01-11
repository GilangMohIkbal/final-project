export default function Movie(props) {
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
