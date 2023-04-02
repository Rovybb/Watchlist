import styled from "styled-components";

export const FeedStyled = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, clamp(1rem, 270px, 50rem));
  place-content: center;
  gap: 20px;
`