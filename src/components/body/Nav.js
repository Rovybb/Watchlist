import { NavStyled } from "./styles/Nav.styled";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <NavStyled>
      <ul>
        <li>
          <NavLink 
            to='/' 
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='watchlist'
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" }
          >
            <span>Watchlist</span>
          </NavLink>
        </li>
      </ul>
    </NavStyled>
  )
}

export default Nav