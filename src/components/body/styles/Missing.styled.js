import styled from "styled-components";

export const MissingStyled = styled.main`
    width: 100%;
    flex-grow: 1;
    padding: 1rem;
    overflow-y: auto;
    background-color: ${({ theme }) => theme.colors.background};
    margin-top: 3.5rem;

    & p {
        margin-top: 1rem;
    }

    & a {
        color: crimson;
    }
`