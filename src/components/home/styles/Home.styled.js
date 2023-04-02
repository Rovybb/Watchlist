import styled from "styled-components";

export const HomeStyled = styled.main`
  position: relative;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 1rem; */

  .loadingSpinner {
    animation: rotating 2s infinite;
  }
  
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`