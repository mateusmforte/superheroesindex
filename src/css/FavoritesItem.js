import styled from "styled-components";

export const FavoriteHero = styled.div`
  position: relative;
  text-align: center;
  color: red;
  height: fit-content;
  margin-top: 10%;
  &:hover {
    transition: 0.2s;
    transform: scale(1.08);
  }
  & .remove-button {
    position: absolute;
    font-size: 2em;
    right: -19px;
    top: -19px;
    &:hover {
      transition: 0.5s;
      transform: scale(1.1);
    }
  }
`;
export const FavoriteHeroImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const FavoriteHeroName = styled.span`
  position: absolute;
  bottom: 0px;
  color: white;
  font-size: 20px;
  font-family: "A typewriter for me";
  transform: translate(-100%, 0%);
  background-color: rgba(4, 16, 8, 0.58);
  width: 100%;
  height: auto;
`;
