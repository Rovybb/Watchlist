import styled from "styled-components";

export const WatchlistStyled = styled.main`
    width: 100%;
    flex-grow: 1;
    padding: 1rem;
    padding-top: 1rem;
    background-color: ${({ theme }) => theme.colors.body};
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`