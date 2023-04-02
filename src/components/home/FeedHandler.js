import Feed from "./Feed";
import FeedPages from "./FeedPages";
import StatusMsg from "../body/StatusMsg";
import Searchbar from "../body/Searchbar";
import { FaSpinner } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../../context/DataContext";


function FeedHandler() {
  const { results, fetchError, isLoading, query } = useContext(DataContext);
  return (
    <>
      <Searchbar />
      {
        isLoading && !fetchError && (
          <StatusMsg>
            <FaSpinner className="loadingSpinner" />
          </StatusMsg>
        )
      }
      {
        !isLoading && fetchError && (
          <StatusMsg color={'crimson'}>
              <p>{fetchError}</p>
          </StatusMsg>
        )
      }
      {
        !isLoading && !fetchError && (
          results?.length ? (
              <Feed />
          ) : 
          query ? (
            <StatusMsg>
              <p>No movies to display</p>
            </StatusMsg>
          ) : 
          (
            <StatusMsg>
              <p>Try to search a movie</p>
            </StatusMsg>
          )
        )
      }
      {!isLoading && !fetchError && (results?.length ? <FeedPages /> : <></>)}
    </>
  );
}

export default FeedHandler;
