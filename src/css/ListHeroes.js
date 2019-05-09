import styled from 'styled-components';

export const ListContainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 8% 0;
  @media(min-width:768px){
    padding: 2% 0;
  }
`;

export const HeroesList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  padding: 0;
  overflow: auto;
  .hero-list-name{
    padding: 3%;
    border-radius: 30px;
    list-style-type: none;
    font-size: 1.5em;
    text-decoration: none;
    font-family: "Fjalla One", sans-serif;
    margin-bottom: 2%;
  }
  @media(min-width:768px){
    width: 60%;
  }
`;