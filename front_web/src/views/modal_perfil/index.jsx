import React from 'react';

import ReposList from '../../components/repositories_list';
import {
  Modal,
  Container, 
  Header,
  Main,
  UserImage,
  UserData,
  SmallTitle,
} from './styles'
import { Button } from '../../components/styles';

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
                  <h2>Perfil do usuário</h2>
                  <Button text="Fechar" func={setModalVisible} />
                </Header>

                <UserData>
                  <UserImage src={avatar_url} />
                  <SmallTitle>Nome: {name}</SmallTitle>
                  <SmallTitle>Login: {login}</SmallTitle>
                  <SmallTitle>Localização: {location}</SmallTitle>
                  <SmallTitle>Id: {id}</SmallTitle>
                  <SmallTitle>Número de seguidores: {followers}</SmallTitle>
                  <SmallTitle>Repositórios públicos: {public_repos}</SmallTitle>
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