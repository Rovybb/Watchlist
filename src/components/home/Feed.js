import { FeedStyled } from "./styles/Feed.styled";
import MovieCard from "./MovieCard";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function Feed() {
  const { results } = useContext(DataContext);

  return (
    <FeedStyled>
      {results?.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
      ))}
    </FeedStyled>
  )
}

export default Feed