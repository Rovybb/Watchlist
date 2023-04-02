import styled from "styled-components";

export const PopupStyled = styled.div`
    position: fixed;
    font-size: .8rem;
    font-weight: bold;
    top: 10px;
    width: 5rem;
    left: calc(50% - 2.5rem);
    text-align: center;
    padding: .3rem 0;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.action};
    border-radius: 5px;
    animation: popup 3s ease-in-out 0s 1 normal forwards;

    @keyframes popup {
        0% {
            top: -43px;
        }
        10% {
            top: 10px;
        }
        90% {
            top: 10px;
        }
        100% {
            top: -43px;
        }
    }
`