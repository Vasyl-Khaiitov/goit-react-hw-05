export default function MovieTitle({ movie, defaultImg }) {
  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster || defaultImg} alt={movie.title} width="300" />
    </div>
  );
}
