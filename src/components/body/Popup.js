import { PopupStyled } from "./styles/Popup.styled";

function Popup({ text }) {
  return (
    <PopupStyled>
        {text}
    </PopupStyled>
  )
}

export default Popup