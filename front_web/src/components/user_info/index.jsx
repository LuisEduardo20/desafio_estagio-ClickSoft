import React from 'react';

import UserImage from '../user_image';
import { UserName } from '../../styles';

const UserInfo = ({gitHubData, modalVisible, setModalVisible}) => {
  return (
    <>
      {gitHubData['avatar_url'] 
        ? 
          <UserImage url={gitHubData['avatar_url']} largura={200} modalVisible={modalVisible} setModalVisible={setModalVisible} /> 
        :
          ''}

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
    </>
  );
}

export default UserInfo;