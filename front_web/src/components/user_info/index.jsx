import React from 'react';

// import UserImage from '../user_image';
import { UserName } from '../../styles';
import {UserImage,
        UserContent,
        ImageSession,
        ContentSession, } from '../styles';

const UserInfo = ({gitHubData, modalVisible, setModalVisible}) => {
    const { avatar_url } = gitHubData; 

  return (
    <UserContent>
      <ImageSession>
        {avatar_url 
          ? 
            <UserImage 
              src={avatar_url} 
              alt="Foto de perfil do GitHub do usuário"
              onClick={() => { setModalVisible(!modalVisible) }}
            />
          :
            ''}
      </ImageSession>
      <ContentSession>

        {gitHubData['name'] 
          ? 
            <UserName>Nome: {gitHubData['name']}</UserName>
          :
            ''}

        {gitHubData['login'] 
          ? 
            <UserName>Login: {gitHubData['login']}</UserName>
          :
            ''}

        {gitHubData['location'] 
          ? 
            <UserName>Localização: {gitHubData['location']}</UserName>
          :
            ''}
      </ContentSession>

    </UserContent>
  );
}

export default UserInfo;