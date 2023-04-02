import { FeedPagesStyled } from "./styles/FeedPages.styled"
import { FaPlus, FaMinus } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function FeedPages() {
  const { totalPages, currentPage, setCurrentPage, handleAutoScroll } = useContext(DataContext);

  const handleNextPage = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      handleAutoScroll();
    }
  }

  const handlePrevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
      handleAutoScroll();
    }
  }

  return (
    <FeedPagesStyled>
        <button onClick={handlePrevPage}><FaMinus /></button>
        <span> {currentPage} </span>
        <span> of {totalPages} </span>
        <button onClick={handleNextPage}><FaPlus /></button>
    </FeedPagesStyled>
  )
}

export default FeedPages