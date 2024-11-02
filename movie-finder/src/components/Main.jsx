import Movies from "./Movies";
import PropTypes from "prop-types";

function Main({ loading, movies }) {
  return (
    <main>{loading ? <p>Cargando... </p> : <Movies movies={movies} />}</main>
  );
}

Main.propTypes = {
  loading: PropTypes.bool,
  movies: PropTypes.array,
};

export default Main;
