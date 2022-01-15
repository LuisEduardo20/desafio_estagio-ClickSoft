import styled from 'styled-components';

export const Button = styled.button `
  width: 100%;
  height: 40px;
  cursor: pointer;
  background-color: #9E4770;
  border: none;
  border-radius: 5px;
  color: #FBFBFB;
  font-size: 18px;
  transition: 0.5s;
  &:hover { background-color: #631D76; }

  @media(max-width: 768px) {
    width: 90%;
  }
`;

export const CloseButton = styled.button `
  width: 36px;
  height: 36px;
  cursor: pointer;
  background-color: #9E4770;
  border: none;
  border-radius: 5px;
  color: #FBFBFB;
  font-size: 24px;
  font-weight: bold;
  transition: 0.5s;
  &:hover { background-color: #631D76; }
`;

export const SmallTitle = styled.h2 `
  margin-top: 30px;
  margin-bottom: 30px;
  color: #FBFBFB;
`;

export const UserView = styled.div `
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
  padding: 20px 0 20px 0;
  background-color: #959097;
  border-radius: 5px;
  flex-wrap: wrap;

  @media(max-width: 768px) {
    width: 90%;
  }
`;

export const UserPic = styled.div `
  width: 50%;
`;

export const UserData = styled.div `
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const UserContent = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageSession = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  `;
export const UserImage = styled.img `
  width: 60%;
  border-radius: 10px;
  cursor: pointer;
`;

export const ContentSession = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
  
  @media(max-width: 768px) {
    justify-content: start;
    margin-left: 20px;
  }
`;

export const UsersList = styled.ul `
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-left: 0;
  padding-right: 20px;
`;

export const ListItem = styled.li `
  width: 100%;
  text-align: left;
  margin-bottom: 5px;
  padding-right: 5px;
  color: #FBFBFB;
  font-size: 16px;
`;

export const RepositorioList = styled.ul `
  width: 90%;
  list-style-type: circle;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const RepositorioListItem = styled.li `
  margin: 10px 0 10px 0;
  font-size: 18px;
  
  @media(max-width: 768px) {
    font-size: 16px;
  }
`;

export const Link = styled.a `
  width: 50%;
  text-decoration: none;
  color: #FBFBFB;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: #959097;
  padding: 10px;
  margin: 0 10px 10px 10px;
  word-wrap: break-word;
  text-align: center;
  
  @media(max-width: 768px) {
    width: 90%;
  }
`;

export const Divider = styled.hr `
  width: 100%;
  border-top: 1px solid black;
  margin-bottom: 20px;
`;