import styled from "styled-components";

export const StatusMsgStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: calc(82% - 3.5rem);
    padding-top: 1rem;
    font-size: 1.5rem;
    color: ${({ color }) => color ? color : 'inherit'};

    p {
        text-align: center;
    }
`