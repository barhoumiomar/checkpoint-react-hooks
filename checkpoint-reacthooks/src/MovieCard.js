function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p><strong>Note :</strong> {movie.rating}</p>
    </div>
  );
}
export default MovieCard;