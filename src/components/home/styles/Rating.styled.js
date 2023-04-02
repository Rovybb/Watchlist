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