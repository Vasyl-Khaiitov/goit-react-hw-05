import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const searchSchema = Yup.object().shape({
  movies: Yup.string().min(2, 'Min 2 characters').max(50, 'Max 50 characters'),
});

export default function SearchMovies({ onSubmit }) {
  const handleSubmit = (value, helpers) => {
    const inputValue = value.movies.trim();

    if (!inputValue) {
      toast.error('Enter a keyword to search for');
      return;
    }

    onSubmit(inputValue);
    helpers.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ movies: '' }}
        validationSchema={searchSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="movies">Search</label>
          <Field
            id="movies"
            type="text"
            name="movies"
            placeholder="Search movies"
          />
          <ErrorMessage name="movies" component="span" className="error" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />
    </div>
  );
}
