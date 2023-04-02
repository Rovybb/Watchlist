import WatchListCard from "./WatchListCard"
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function WatchListFeed({ searchResults }) {
  return (
    <>
        {searchResults?.map(movie => (
            <WatchListCard key={movie.id} movie={movie} />
        ))}
    </>
  )
}

export default WatchListFeed