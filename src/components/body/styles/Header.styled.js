import styled from "styled-components";

export const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 3.5rem;
    background-color: ${({ theme }) => theme.colors.header};
    backdrop-filter: blur(5px);
    box-shadow: inset 0px -8px 20px #2225;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        display: flex;
        align-items: center;
        margin-right: 1rem;
    }

    h1 svg {
        margin-right: 10px;
    }

    button {
        font-size: 150%;
        display: grid;
        place-content: center;
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.text};
        cursor: pointer;
        transition: 0.3s ease;
    }
`