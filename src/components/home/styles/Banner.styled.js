import styled, { keyframes } from "styled-components";

export const BannerStyled = styled.div`
  position: relative;
  z-index: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.body};
  backdrop-filter: blur(100px);
  width: 100%;
  min-height: 100%;
  padding-top: 3.5rem;

  h1 {
    font-size: 5rem;
    margin-bottom: .5rem;
    z-index: 1;
  }

  p {
    font-size: 1.2rem;
    margin-top: .5rem;
    color: ${({ theme }) => theme.colors.banerText};
    z-index: 1;
    width: 100%;
  }

  @media only screen and (min-width: 610px) {
    p {
      width: 55%;
    }
  }

  @media only screen and (min-width: 740px) {
    align-items: flex-start;
  }
`
const rotate = keyframes`
  0% { 
    transform: rotate(0deg) translateX(20px) rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg) translateX(20px) rotate(-360deg); 
  }
`

export const Circle1 = styled.div`
  position: absolute;
  align-self: flex-start;
  top: 0;
  z-index: -1;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 150px ${({ theme }) => theme.colors.action};
  background-color: ${({ theme }) => theme.colors.action};
  animation: ${rotate} 6s linear normal infinite;
`

export const Circle2 = styled.div`
  display: none;
  position: absolute;
  top: 5rem;
  right: 2rem;
  z-index: -1;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 100px ${({ theme }) => theme.colors.action};
  background-color: ${({ theme }) => theme.colors.action};
  animation: ${rotate} 7s 1s linear reverse infinite;

  @media only screen and (min-width: 610px) {
    display: block;
  }
`

export const Circle3 = styled.div`
  display: none;
  position: absolute;
  top: 60%;
  right: 40%;
  z-index: -1;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  box-shadow: 0px 0px 50px 75px ${({ theme }) => theme.colors.action};
  background-color: ${({ theme }) => theme.colors.action};
  animation: ${rotate} 5s 3s linear normal infinite;

  @media only screen and (min-width: 610px) {
    display: block;
  }
`