import Popup from "./Popup";
import Nav from "./Nav";
import { HeaderStyled } from "./styles/Header.styled"
import { FaFilm, FaMoon, FaSun } from "react-icons/fa"
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function Header({ title }) {
  const { darkTheme, handleThemeChange, popupText, showPopup } = useContext(DataContext);
  return (
    <HeaderStyled>
      {showPopup && <Popup text={popupText} />}
      <h1>
        <FaFilm/>{title}
      </h1>
      <Nav />
      <button onClick={handleThemeChange}>
        {darkTheme ? <FaMoon/> : <FaSun/>}
      </button>
    </HeaderStyled>
  )
}

export default Header