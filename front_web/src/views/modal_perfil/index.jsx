import React from 'react';

import ReposList from '../../components/repositories_list';
import {Modal,
        Container, 
        Header,
        Main,
        UserData,
        SmallTitle, } from './styles'

import {ImageSession,
        ContentSession,
        CloseButton,
        UserImage, } from '../../components/styles';
import GitHubIcon from '../../components/github_icon';

const UserModal = ({gitHubData, repos, modalVisible, setModalVisible }) => {
  const { avatar_url,
          name,
          login,
          location,
          id,
          followers,
          public_repos, } = gitHubData

  const handleOutOfModal = (e) => {
    if(e.target.id === 'modal'){
      setModalVisible(false)
    }
  }

  return (
    <>
      {modalVisible
        ?
          <Modal id="modal" onClick={handleOutOfModal}>
            <Container id="container">

              <Main>

                <Header>
                  <GitHubIcon />

                  <SmallTitle>Perfil do usuário</SmallTitle>
                  
                  <CloseButton onClick={() => setModalVisible(false)}>X</CloseButton>
                </Header>

                <UserData>
                  <ImageSession>
                    <UserImage src={avatar_url} />
                  </ImageSession>

                  <ContentSession>
                    <SmallTitle>Nome: {name}</SmallTitle>
                    <SmallTitle>Login: {login}</SmallTitle>
                    <SmallTitle>Localização: {location}</SmallTitle>
                    <SmallTitle>Id: {id}</SmallTitle>
                    <SmallTitle>Número de seguidores: {followers}</SmallTitle>
                    <SmallTitle>Repositórios públicos: {public_repos}</SmallTitle>
                  </ContentSession>

                  <ReposList repos={repos} />
                </UserData>
              </Main>

            </Container>
          </Modal>
        :
          ''}
    </>
  );
}

export default UserModal;