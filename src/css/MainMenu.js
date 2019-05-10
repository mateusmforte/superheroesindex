import styled from "styled-components";
import { textPrimaryColor } from "./utils/themecolors";

export const MainMenuContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "A typewriter for me";
  color: ${textPrimaryColor};
`;

export const MainMenuContentHeader = styled.h1`
  height: 15%;
  text-align: center;
  font-size: 2.5em;
  margin-top: 3%;
`;

export const MainMenuContentMessage = styled.p`
  text-align: center;
  font-size: 1.2em;
  padding: 0 10%;
`;

export const MainMenuContentImage = styled.img`
  width: 150px;
  height: 150px;
`;
