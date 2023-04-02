import styled from "styled-components";

export const SearchbarContainer = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        min-height: 10%;
        padding-top: 10px;
`

export const SearchbarStyled = styled.div`
    align-self: flex-start;
    position: relative;
    margin-left: 2%;
    
    .searchForm {
        padding: 0.5rem 0.75rem 0.5rem 0.75rem;
    }

    .searchForm input[type="text"] {
        font-family: 'Open Sans', sans-serif;
        background-color: ${({ theme }) => theme.colors.nav.form.body};
        border-color: ${({ theme }) => theme.colors.nav.form.border};
        border-style: solid;
        color: ${({ theme }) => theme.colors.nav.form.text};
        width: 100%;
        max-width: 300px;
        min-height: 30px;
        font-size: 1rem;
        padding: 0.25rem;
        border-radius: 0.25rem;
        outline: none;
    }

    .searchForm label {
        position: absolute;
        left: -99999px;
    }

    button.resetButton {
        color: ${({ theme }) => theme.colors.nav.form.border};
        position: absolute;
        right: 7.5%;
        top: 3px;
        bottom: 0;
        background: none;
        border: none;
        font-size: 1rem;
        transition: color .2s ease;
    }

    button.resetButton:hover {
        color: ${({ theme }) => theme.colors.nav.form.text};
        transition: color .2s ease;
    }

    @media only screen and (min-width: 610px) {
        .searchForm {
            padding: .5rem .5rem;
        }
    
        .searchForm input[type="text"] {
            margin-left: 0.5rem 0;
        }
    }
`