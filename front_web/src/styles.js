import styled from 'styled-components';
import UserImage from './components/user_image/UserImage'

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
  justify-content: space-between;
  align-items: center;
`;

export const UserData = styled.main `
  background-color: #f2f2f2;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1 `
  color: #525252;
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