import styled from 'styled-components';

export const Screen = styled.main `
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-areas: 'visualizados main';
  
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 1fr;
    grid-template-areas: 
      'main'
      'visualizados'
    ;
  }
`;

export const UsuariosVisualizados = styled.aside `
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #2E2532;
  overflow-y: scroll;
  grid-area: visualizados;
`;

export const Main = styled.div `
  /* display: flex;
  flex-direction: column; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15% 85% ;
  grid-template-areas: 
    'header'
    'user'
  ;
  grid-area: main;

  @media(max-width: 768px) {
    grid-template-rows: 25% 75%;
  }
`;

export const Header = styled.header `
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #E2E1E2;
  box-shadow: 2px 2px 5px black;
  grid-area: header;

  @media(max-width: 768px) {
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 10px;
  }
`;

export const SearchArea = styled.div `
  /* width: 100%; */
  /* display: flex;
  justify-content: left;
  align-items: center; */
`;

export const UserData = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  grid-area: user;
`;

export const UserImage = styled.img `
  width: 50vw;
`;

export const Title = styled.h1 `
  margin: 30px;
  color: #201A23;

  @media(max-width: 768px) {
    display: none;
  }
`;

export const SmallTitle = styled.h3 `
  color: #FBFBFB;
`;

export const UserName = styled.h3 `
  color: #2E2532;
  margin: 20px 0 20px 0;
`;

export const SearchInput = styled.input `
  width: 240px;
  height: 42px;
  text-indent: 10px;
  font-size: 18px;
  color: #2E2532;
  border: 1px solid rgb(125, 125, 125);
  border-radius: 5px;
  &:focus { outline: none; }

  @media(max-width: 768px) {
    width: 220px;
  }
`;

export const SearchButton = styled.button `
  width: 120px;
  height: 36px;
  background-color: #9E4770;
  color: #FBFBFB;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  margin-left: 20px;
  cursor: pointer;
  transition: 0.5s;
  &:hover { background-color: #631D76; }
  
  @media(max-width: 768px) {
    width: 100px;
    font-size: 16px;
    margin-left: 10px;
  }
`;