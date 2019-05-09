import styled from 'styled-components';

export const LoginContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`;

export const LoginHeader = styled(LoginContent) `
    padding: 0 5%;
`;

export const LoginHeaderText = styled.h1 `
    font-size: 4em;
`;

export const LoginHeaderMessage = styled.p `
    font-size:2em;
`;
export const LoginButton = styled.button `
    border-radius: 5px;
    background-color: blue;
    padding: 2% 5%;
    border: none;
    font-size: 1.5em;
    color: white;
    box-shadow: 1px 3px 20px 0px #000;
    &:hover{
        transition:0.5s;
        transform: scale(1.1);
    }
`;