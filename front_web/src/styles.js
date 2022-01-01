import styled from 'styled-components';

export const Header = styled.header `
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchArea = styled.div `
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const Main = styled.main `
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-areas: 'views user';
`;

export const UsuariosVisualizados = styled.aside `
  background-color: #525252
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-area: views;
`;

export const UserData = styled.section `
  background-color: #f2f2f2;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  grid-area: user;
`;

export const Title = styled.h1 `
  color: #525252;
`;

export const SmallTitle = styled.h3 `
  color: #424242;
`;

export const UserName = styled.h2 `
  color: #525252;
  margin: 0;
  padding: 0
  margin-top: 20px;
`;

export const SearchInput = styled.input `
  width: 200px;
  height: 36px;
`;

export const SearchButton = styled.button `
  margin: 0;
  padding: 0;
  width: 120px;
  height: 36px;
`;