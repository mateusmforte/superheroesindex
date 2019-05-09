import styled from "styled-components";

import {
  primaryColor,
  secondaryColor,
  textPrimaryColor,
  textSecondaryColor,
  hoverTextColor
} from "./utils/themecolors";
//Theme

export const NavBarContent = styled.div`
  height: 10%;
  width: 100%;
  @media (min-width: 768px) {
    height: 100%;
    width: 10%;
  }
`;

export const Navbar = styled.nav`
  height: inherit;
  width: inherit;
  position: fixed;
  bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  box-shadow: 1px -11px 14px -3px rgba(0, 0, 0, 0.36);

  .logo {
    display: none;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    box-shadow: 0px 4px 4px -1px rgba(0, 0, 0, 0.36);
    .logo {
      height: 13%;
      width: auto;
      padding: 2%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      box-shadow: -6px 0px 11px 0px rgba(0,0,0,0.75);
      z-index: 1;
      background-color: ${primaryColor};
    }
  }
`;

export const LogoIcon = styled.i`
  @media (min-width: 768px) {
    background-image: url(${require('../img/icons/superheroemote.png')});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: 100%;
    color: ${textPrimaryColor};
    &:hover {
      color: ${textSecondaryColor};
    }
  }
`;
export const LogoText = styled.span`
  @media (min-width: 768px) {
    font-family: "Play", sans-serif;
    font-size: 1.2vw;
    color: ${textPrimaryColor};
    text-decoration: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  order: 2;
  width: 70%;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  margin: 0;
  font-family: "Fjalla One", sans-serif;
  list-style-type: none;
  background-color: ${secondaryColor};
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    height: 70%;
    width: auto;
    padding: 10% 0;
    order: unset;
  }
`;

export const MenuItem = styled.li`
  .menu-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    line-height: 1em;
    color: ${textSecondaryColor};
    &:hover {
      color: ${hoverTextColor};
    }
  }

  & i {
    font-size: 8vw;
    text-align: center;
  }
  & span {
    font-size: 3vw;
  }
  @media (min-width: 768px) {
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 50% 0;
    .menu-link {
      i {
        font-size: 4vw;
      }
      span {
        font-size: 1vw;
      }
    }
  }
`;

export const UserPanel = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Fjalla One", sans-serif;
  background-color: ${primaryColor};
  color: ${textPrimaryColor};
  @media (min-width: 768px) {
    width: auto;
    height: 15%;
    padding: 5%;
    box-shadow: -6px 0px 11px 0px rgba(0,0,0,0.75);
    z-index: 1;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  width: 100%;
  padding: 1%;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  color: ${textPrimaryColor};
  text-decoration: none;
  & span {
    font-size: 3.5vw;
  }
  & i {
    font-size: 25px;
    order: 0;
  }
  & a{
    color: ${textPrimaryColor};
    &:hover{
      color: ${textSecondaryColor};
    }
  }
  @media (min-witdh: 768px) {
    & span {
      font-size: 1.5vw;
    }
    & i {
      font-size: 3vw;
    }
  }
`;
