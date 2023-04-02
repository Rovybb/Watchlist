import styled from "styled-components";

export const FeedPagesStyled = styled.nav`
    margin-top: 5px;
    margin-bottom: 5px;
    min-height: 5%;

    button {
        margin: 0 12px;
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.action};
        transition: color .2s ease;
        cursor: pointer;
    }

    button:hover {
        color: ${({ theme }) => theme.colors.actionHover};
    }
`