import { MissingStyled } from './styles/Missing.styled';
import { Link } from 'react-router-dom';
import Footer from "./Footer";

function Missing() {
  return (
    <>
        <MissingStyled>
            <h2>Page Not Found</h2>
            <p>404: You are trying to access an invalid link.</p>
            <p>
                <Link to='/'>Visit Our Homepage</Link>
            </p>
        </MissingStyled>  
        <Footer />
    </>
    )
}

export default Missing