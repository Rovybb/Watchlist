import styled from "styled-components";

export const WatchlistWraper = styled.div`
  margin-top: 3.5rem;
  position: relative;
  width: 100%;
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  flex-direction: column;
  align-items: center;
`