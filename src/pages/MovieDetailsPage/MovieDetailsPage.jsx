// import MoviesDetails from '../../components/MovieDetails/MovieDetails';

export default function MovieDetails() {
  // const { movieId } = useParams();
  //  useEffect(() => {
  //    async function fetchDataId() {
  //      if (!movieId) return;

  //      setError(false);
  //      setLoading(true);

  //      try {
  //        const dataDetails = await fetchMovieDetails(movieId);
  //        setMovieDetails(dataDetails); // ✅ Зберігаємо отримані дані
  //      } catch (error) {
  //        setError(error.message || 'Не вдалося отримати деталі фільму.');
  //      } finally {
  //        setLoading(false);
  //      }
  //    }

  //    fetchDataId();
  //  }, [movieId]);

  return (
    <div>
      {/* <MoviesDetails /> */}
      <h2>Hello details</h2>
    </div>
  );
}
