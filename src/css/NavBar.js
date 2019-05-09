import styled from "styled-components";

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
      box-shadow: 0px 20px 32px -8px rgba(0, 0, 0, 0.75);
      z-index: 1;
    }
  }
`;

export const LogoIcon = styled.i`
  @media (min-width: 768px) {
    background-image: url("../img/icons/superhero.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    height: 100%;
    width: 100%;
  }
`;
export const LogoText = styled.span`
  @media (min-width: 768px) {
    font-family: "Play", sans-serif;
    font-size: 1.2vw;
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
    line-height: 2em;
  }
  i {
    font-size: 8vw;
    text-align: center;
  }
  span {
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
  @media (min: width:768px) {
    width: auto;
    height: 15%;
    padding: 5%;
    box-shadow: 0px -20px 32px -8px rgba(0, 0, 0, 0.75);
    z-index: 1;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  width: 100%;
  padding: 1%;
  justify-content: space-around;
  align-items: center;
  font-size: 4vw;
  i {
    font-size: 25px;
    order: 0;
  }
  @media (min-witdh: 768px) {
    flex-direction: column;
    span {
      font-size: 1.5vw;
    }
    i {
      font-size: 3vw;
    }
  }
`;
