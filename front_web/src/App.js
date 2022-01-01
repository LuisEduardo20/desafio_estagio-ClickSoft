import {Header, 
        SearchArea,
        Main,
        UserData,
        UsuariosVisualizados, 
        Title, 
        SearchInput, 
        SearchButton, 
        UserName, } from './styles';
import { useState, useEffect } from 'react';
import UserImage from './components/user_image/UserImage';
import ListaVisualizados from './components/usuarios_visualizados/'
import api from './Axios.js';

function App() {

  const [ gitHubData, setGitHubData ] = useState([]);
  const [ userName, setUserName ] = useState();
  const [ inputText, setInputText ] = useState();
  const [ usuariosPesquisados, setUsuariosPesquisados ] = useState([]);

  const searchUser = (userName) => {
    setUserName(userName);
    // console.log(gitHubData)
  }


  const addUsuarioPesquisado = (name) => {
    if(!usuariosPesquisados.includes(name)) {
      const users = Array.from(usuariosPesquisados);
      users.push(name)
      setUsuariosPesquisados(users);
    }
  }    


  useEffect( () => {
    api.get(`users/${userName}`)
    .then( ({data}) => {
      setGitHubData(data);
      addUsuarioPesquisado(userName);
    })
  }, [userName]);


  return (
    <div className="App">

      <Header>
        <Title>Pesquisa de usuário</Title>
        <SearchArea>
          
          <SearchInput onChange={ e => setInputText(e) } />
        
          <SearchButton 
            onClick={ () => {
              const name = inputText.target.value;
              searchUser(name);
            }
          }>
            Pesquisar usuário
          </SearchButton>

        </SearchArea>
      </Header>

      <Main>
        
        <UsuariosVisualizados>
          <ListaVisualizados users={usuariosPesquisados} func={searchUser} />
        </UsuariosVisualizados>

        <UserData>
        
        {gitHubData['avatar_url'] 
          ? 
            <UserImage url={gitHubData['avatar_url']} largura={200} /> 
          :
            ''
        }

        {gitHubData['name'] 
          ? 
            <UserName>Nome: {gitHubData['name']}</UserName>
          :
            ''
        }

        {gitHubData['login'] 
          ? 
            <UserName>Login: {gitHubData['login']}</UserName>
          :
            ''
        }

        {gitHubData['location'] 
          ? 
            <UserName>Localização: {gitHubData['location']}</UserName>
          :
            ''
        }
      </UserData>

      </Main>
      
    </div>
  );

}

export default App;