import styled from "styled-components";
import {textPrimaryColor} from "./utils/themecolors";


export const SettingsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h3 {
    font-size: 1.5em;
    color: ${textPrimaryColor};
    text-align: center;
    font-family: "Play",sans-serif;
  }
`;

export const ThemeSettings = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  
`;

export const MarvelTheme = styled.button`
  background-image: url(${require("../img/icons/Marvel-logo.png")});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-shadow: 0px 0px 10px 3px black;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border:none;
  &:focus{
    outline:none;
  }
`;

export const DCTheme = styled(MarvelTheme)`
 background-image: url(${require("../img/icons/DC-logo.png")});
`;
