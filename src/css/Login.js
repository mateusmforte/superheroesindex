import styled from "styled-components";
import { primaryColor, textPrimaryColor } from "./utils/themecolors";

export const LoginContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "A typewriter for me";
  color: ${textPrimaryColor};
`;
export const LoginImage = styled.img`
  width: 150px;
  height: 150px;
`;

export const LoginHeader = styled(LoginContent)`
  padding: 0 5%;
`;

export const LoginHeaderText = styled.h1`
  font-size: 4em;
  margin: 0;
`;

export const LoginHeaderMessage = styled.p`
  font-size: 1.5em;
`;
export const LoginButton = styled.button`
  align-self: center;
  border-radius: 5px;
  background-color: ${primaryColor};
  padding: 2% 5%;
  border: none;
  font-size: 1.5em;
  color: white;
  box-shadow: 1px 3px 20px 0px #000;
  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;
