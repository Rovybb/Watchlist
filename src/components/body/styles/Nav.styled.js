import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.nav.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  ul {
    color: ${({ theme }) => theme.colors.nav.text};
    height: 100%;
    list-style-type: none;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease;
    user-select: none;
  }

  li a {
    padding: 1rem;
    flex-grow: 1;
    transition: 0.2s ease;
    color: ${({ theme }) => theme.colors.nav.buttons.text};
    text-decoration: none;
  }

  li:hover a:not(.active) {
    background-color: ${({ theme }) => theme.colors.nav.buttons.textHover};
    color: ${({ theme }) => theme.colors.nav.buttons.backgroundHover};
    transition: 0.2s ease;
  }

  li:hover a:not(.active) {
    cursor: pointer;
  }

  li a.active {
    pointer-events: none;
  }

  li a.active span {
    padding-bottom: 3px;
    border-bottom: 4px solid ${({ theme }) => theme.colors.action};
    animation: fly 0.2s ease-out;
  }

  @keyframes fly {
    0% {
      padding-bottom: 7px;
    }
    100% {
      padding-bottom: 3px;
    }
  }

  @media only screen and (min-width: 610px) {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

    ul {
      text-align: right;
    }
  }
`