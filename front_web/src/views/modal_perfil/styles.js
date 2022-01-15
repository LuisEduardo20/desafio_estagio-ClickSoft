import styled from 'styled-components';

export const Modal = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(32, 26, 35, 0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;

  export const Container = styled.div `
  width: 80vw;
  height: 90vh;
  background-color: #FBFBFB;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
`;

export const Header = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 10px 30px 10px;
  
  @media(max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Main = styled.div `
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const UserData = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SmallTitle = styled.h2 `
  color: #2E2532;
  margin: 20px 0 20px 0;

  @media(max-width: 768px) {
    font-size: 16px;
  }
`;