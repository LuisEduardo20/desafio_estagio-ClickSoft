import React from 'react';

const botao = ({text, func}) => {
  return (
    <button onClick={() => {func(false)}}>{text}</button>
  );
}

export default botao;