import React from 'react';
import { SmallTitle } from '../styles';
import UserImage from '../user_image';

const ListaVisualizados = (props) => {
  return (
    <>
      <SmallTitle>Visualizados recentemente</SmallTitle>
      { props.users.map( (user, index) => (
          <li key={`user${index}`}>
            <UserImage url={user.image_url} largura={100} />
            <button onClick={() => {props.func(user)}}> {user} </button>
          </li>
        ))}
    </>
  );
}

export default ListaVisualizados;