import { WatchlistStyled } from "./styles/Watchlist.styled";
import { WatchlistWraper } from "./styles/WatchlistWraper.styled";
import WatchListFeed from "./WatchListFeed";
import Footer from "../body/Footer";
import StatusMsg from "../body/StatusMsg";
import { useEffect, useState, useContext } from "react";
import DataContext from "../../context/DataContext";
import Searchbar from "../body/Searchbar";

function Watchlist() {
  const { setQuery, searchText, setSearchText, watchList } = useContext(DataContext);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchText('');
    setQuery('');
  }, []);

  useEffect(() => {
    const filteredResults = watchList?.filter(movie => 
      ((movie.overview).toLowerCase()).includes(searchText.toLowerCase()) || 
      ((movie.title).toLowerCase()).includes(searchText.toLowerCase()));
      setSearchResults(filteredResults);
  }, [searchText, watchList, setSearchResults]);

  return (
    <WatchlistWraper>
      <Searchbar />
      <WatchlistStyled>
        {
          watchList?.length ? (
            searchResults.length ? 
            <WatchListFeed searchResults={searchResults} /> 
            : 
            <StatusMsg>
                <p>No results</p>
              </StatusMsg>
          ) : 
          <StatusMsg>
                <p>Your list is empty</p>
              </StatusMsg>
        }
      </WatchlistStyled>
      <Footer />
    </WatchlistWraper>
  )
}

export default Watchlist