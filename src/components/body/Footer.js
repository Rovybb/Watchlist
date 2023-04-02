import { FooterStyled } from "./styles/Footer.styled";

function Footer() {
  const today = new Date();

  return (
    <FooterStyled>
      <p>
         Fiipractic &copy; {today.getFullYear()}
      </p>
    </FooterStyled>
  )
}

export default Footer