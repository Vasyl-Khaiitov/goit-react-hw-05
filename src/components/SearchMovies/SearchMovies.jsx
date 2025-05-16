// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function SearchMovies() {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!query) return; // Не робимо запит, якщо парамер запиту пустий

//     const source = axios.CancelToken.source();
//     setLoading(true);

//     const myACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;

//     axios
//       .get('https://api.themoviedb.org/3/search/movie', {
//         params: {
//           api_key: myACCESS_TOKEN, // Ключ доступу із .env
//           query: query,
//           include_adult: false,
//           language: 'en-US',
//           page: 1,
//         },
//         headers: {
//           Authorization: `Bearer ${myACCESS_TOKEN}`,
//         },
//         cancelToken: source.token,
//       })
//       .then((response) => {
//         setMovies(response.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (!axios.isCancel(err)) {
//           setError(err);
//           setLoading(false);
//         }
//       });

//     // Скасовуємо запит при зміні query або розмонтуванні компонента
//     return () => {
//       source.cancel();
//     };
//   }, [query]);
import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchMovies({ onSubmit }) {
  const handleSubmit = (value, helpers) => {
    const inputValue = value.movies;

    if (inputValue.trim() !== '') {
      onSubmit(inputValue);
    } else {
      toast.error('Enter a keyword to search for', {
        duration: 2500,
        position: 'top-right',
      });
    }

    helpers.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          movies: 'King',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="movies">Search</label>
          <Field
            id="movies"
            type="text"
            placeholder="Search movies"
            name="movies"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />

      {/* {loading && <p>Завантаження...</p>}
      {error && <p>Виникла помилка: {error.message}</p>} */}
    </div>
  );
}
