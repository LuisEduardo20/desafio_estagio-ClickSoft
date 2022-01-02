import React from 'react';

const UserImage = ({url, largura, modalVisible, setModalVisible}) => {
  return (
    <img 
      onClick={() => {
        console.log('clicou na imagem!');
        setModalVisible(!modalVisible);
      }} 
      src={url} 
      width={largura}
      alt="Foto do usuário" 
    />
  );
}

export default UserImage;