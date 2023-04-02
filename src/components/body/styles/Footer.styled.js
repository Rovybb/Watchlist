import styled from "styled-components";

export const FooterStyled = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.footer};
    padding: 1rem;
    min-height: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`