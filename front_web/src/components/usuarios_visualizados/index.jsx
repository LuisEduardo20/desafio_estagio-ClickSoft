import React from 'react';
import {SmallTitle,
        UserView,
        UserPic,
        UserData,
        UsersList,
        UserImage,
        ListItem,
        Button, } from '../styles';

const ListaVisualizados = (props) => {
  const { users, modalVisible, setModalVisible, func } = props;

  return (
    <>
      <SmallTitle>Visualizados recentemente</SmallTitle>

      {users.map( (user, index) => {
        return (
          <UserView key={`user${index}`}>
            <UserPic>
                <UserImage 
                  src={user.avatar_url} 
                  alt="Foto de perfil do GitHub do usuário" 
                  onClick={() => {
                    setModalVisible(!modalVisible);
                    func(user.login);
                  }}
                />
            </UserPic>

            <UserData>
              <UsersList>
                <ListItem>
                  <Button 
                    text={user.name} 
                    onClick={() => { func(user.login); }
                  }>
                    {user.name}
                  </Button>
                </ListItem>
                <ListItem>{user.login}</ListItem>
                <ListItem>{user.location}</ListItem>
              </UsersList>
            </UserData>
          </UserView>
        );
      })}
    </>
  );
}

export default ListaVisualizados;