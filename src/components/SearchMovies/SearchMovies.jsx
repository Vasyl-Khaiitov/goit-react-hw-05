import { Field, Form, Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';

export default function SearchMovies({ onSubmit }) {
  const handleSubmit = (value, helpers) => {
    const inputValue = value.movies.trim();

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
          movies: '',
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
    </div>
  );
}
