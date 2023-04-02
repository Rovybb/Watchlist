import { SearchbarStyled, SearchbarContainer } from "./styles/Searchbar.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

library.add(faXmark);

function Searchbar() {
  const { setQuery, searchText, setSearchText, handleAutoScroll } = useContext(DataContext);

  return (
    <SearchbarContainer>
      <SearchbarStyled>
          <form className="searchForm" autoComplete="off" onSubmit={(e) => {e.preventDefault(); handleAutoScroll(); setQuery(searchText);}}>
              <label htmlFor="search">Search Posts</label>
              <input
                id="search"
                type="text"
                placeholder="Search Movies"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
          </form>
          <button className="resetButton" onClick={() => {setSearchText(''); setQuery(''); handleAutoScroll();}}>
              <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </button>
      </SearchbarStyled>
    </SearchbarContainer>
  )
}

export default Searchbar