import styled from 'styled-components';

export const Modal = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  `;
  
  export const Container = styled.div `
  width: 70vw;
  height: 60vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  
  // margin-left: 10%
`;

export const Header = styled.header `
  display: flex;
  justify-content: space-between;
  margin: 0 10px 0 10px;
`;

export const Main = styled.div `
  overflow: scroll;
  overflow-x: hidden;
`;

export const UserImage = styled.img `
  max-width: 250px;
  max-height: 250px;
`;
UserImage.defaultProps = {
  src: `${props => `${props.src}`}`,
  alt: 'Foto do perfil do github'
}

export const UserData = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const SmallTitle = styled.h3 `
  color: #525252;
`;