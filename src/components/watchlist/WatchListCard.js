import { WatchListCardStyled } from "./styles/WatchListCard.styled";
import Rating from "../home/Rating";
import { FaMinus, FaBan } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function WatchListCard({ movie }) {
  const { handleDelete } = useContext(DataContext);

  return (
    <WatchListCardStyled>
        { 
          movie.backdrop_path?.length ?
          <>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt=''/>
            <Rating rating={movie.vote_average / 2} />
          </> :
          <>
            <div className="PlaceHolder"><FaBan /></div>
            <Rating rating={movie.vote_average / 2} />
          </>
        }
        <div className="CardContent">
          <h1>{movie.title ? (movie.title.length > 50 ? `${movie.title.slice(0, 50)}...` : movie.title) : ''}</h1>
          <p>{movie.overview ? movie.overview : ''}</p>
        </div>
        <button onClick={() => handleDelete(movie.id)}><FaMinus /></button>
    </WatchListCardStyled>
  )
}

export default WatchListCard