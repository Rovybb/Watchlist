import styled from "styled-components";

export const WatchListCardStyled = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.movieCards.background};
  width: 100%;
  min-height: 90px;
  height: 90px;
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 0px 0px 15px #222;
  display: flex;
  justify-content: space-between;
  outline: 1px solid ${({ theme }) => theme.colors.action};
  overflow: hidden;
  transition: transform .2s ease, outline-color .2s ease;

  &:hover {
    outline-color: ${({ theme }) => theme.colors.actionHover};
    transform: scale(101%);
    transition: transform .2s ease, outline-color .2s ease;
  }

  .CardContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    padding: 1rem;
  }

  .CardContent h1 {
    font-size: .7rem;
    margin-bottom: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .CardContent p {
    font-size: .5rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  img {
    width: auto;
    height: 100%;
  }

  .PlaceHolder {
    height: 100%;
    display: flex;
    aspect-ratio: 500/281;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    background-color: ${({ theme }) => theme.colors.movieCards.placeholder};
  }

  .Rating {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    aspect-ratio: 500/281;
    display: flex;
    z-index: 2;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(34, 34, 34, 0.6);
    font-size: 0.8rem;
    transition: 0.2s ease;
    opacity: 0;

    h1 {
      font-size: 1rem;
      color: #fff;
      margin-bottom: .5rem;
    }
  }

  .Rating:hover {
    opacity: 1;
  }

  button {
    height: 100%;
    width: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.action};
    color: ${({ theme }) => theme.colors.movieCards.buttonText};
    transition: 0.2s ease;
    border: none;
    flex: 0;
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.actionHover};
  }
    

  @media only screen and (min-width: 610px) {
    & {
      min-height: 100px;
      height: 100px;
    }
  }

  @media only screen and (min-width: 740px) {
    .CardContent h1 {
      font-size: .8rem;
    }

    .CardContent p {
      font-size: 0.6rem;
    }
  }

  @media only screen and (min-width: 975px) {
    & {
      width: 80%;
      min-height: 120px;
      height: 120px;
    }

    .CardContent h1 {
      font-size: 1rem;
    }

    .CardContent p {
      font-size: 0.8rem;
    }
  }
`
