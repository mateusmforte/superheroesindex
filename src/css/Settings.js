import styled from "styled-components";
import { primaryColor, secondaryColor } from "./utils/themecolors";

export const SettingsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ThemeSettings = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & h3 {
    text-align: center;
  }
`;

export const MarvelTheme = styled.button`
  border: 2px solid #E23636;
  background-color: #fdf6f7;
  border-radius: 50%;
  box-shadow: 0px 0px 10px 3px black;
  width: 50px;
  height: 50px;
`;

export const DCTheme = styled(MarvelTheme)`
  border: 2px solid #0476f2;
  background-color: #283044;
`;
