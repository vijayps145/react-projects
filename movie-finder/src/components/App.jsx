import { useCallback, useState } from "react";
import Header from "./Header";
import { Form } from "./Form";
import Main from "./Main";
import { useSearch } from "../hooks/useSearch";
import { useMovies } from "../hooks/useMovies";
import debounce from "just-debounce-it";

function App() {
  const [sort, setSort] = useState(false);

  // Destructure hasError from useSearch here
  const { search, updateSearch, error, hasError } = useSearch();
  const { movies, loading, getMovies } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  function handleSubmit(event) {
    event.preventDefault();
    getMovies({ search });
  }

  const handleSort = () => {
    setSort(!sort);
  };

  function handleChange(event) {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  }

  return (
    <div className="page">
      <Header error={hasError ? error : null}>
        <Form
          handleSubmit={handleSubmit}
          error={hasError}
          handleChange={handleChange}
          search={search}
          handleSort={handleSort}
          sort={sort}
        />
      </Header>
      <Main loading={loading} movies={movies} />
    </div>
  );
}

export default App;
