import styled from "styled-components";

export const StarsStyled = styled.div`
  position: relative;
  width: calc(1.5rem * 5);
  height: 1.5rem;
  display: flex;
  justify-content: center;

  ${
    ({ fillValues }) => {
      let i = 1;
      const injection = [];
      fillValues.forEach(fill => {
        injection.push(`
        .Star:nth-child(${i++}) {
          z-index: 3;
          max-width: 30px;
          background: linear-gradient(90deg, rgba(255, 227, 0, 1) ${fill}, rgba(0, 0, 0, 0.6) ${fill});
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          outline: 3px #ffe300;
          flex: 1;
        }
        `);
      });
      return injection;
    }
  }
`

export const MovieCardStyled = styled.div`
position: relative;
background-color: ${({ theme }) => theme.colors.movieCards.background};
width: 100%;
height: clamp(23rem, 325px, 25rem);
flex-direction: column;
border-radius: 5px;
box-shadow: 0px 0px 15px #222;
display: flex;
justify-content: space-between;
outline: 1px solid ${({ theme }) => theme.colors.action};
overflow: hidden;
transition: outline-color .2s ease, transform .2s ease;

&:hover {
    outline-color: ${({ theme }) => theme.colors.actionHover};
    transform: scale(101%);
    transition: outline-color .2s ease, transform .2s ease;
  }

.CardContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 1rem;

  h1 {
    font-size: 1rem;
    text-align: center;
    display: grid;
    place-content: center;
    flex-grow: 1;
  }

  p {
    font-size: 0.7rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}

img {
  max-width: 100%;
  height: auto;
}

.PlaceHolder {
  width: 100%;
  display: flex;
  aspect-ratio: 500/281;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.movieCards.placeholder};
}

.Rating {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 500/281;
  display: flex; /*display: none;*/ 
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
  height: 48px;
  width: 100%;
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
}

button:hover {
  background-color: ${({ theme }) => theme.colors.actionHover};
}

@media only screen and (min-width: 740px) {
  

  .CardContent  h1 {
    font-size: 1.2rem;
  }

  .CardContent  p {
    font-size: 0.8rem;
  }
}
`
