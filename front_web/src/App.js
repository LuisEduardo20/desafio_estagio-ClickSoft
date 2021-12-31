import { Header, SearchArea, UserData, Title, SearchInput, SearchButton, UserName } from './styles';
import { useState, useEffect } from 'react';
import UserImage from './components/user_image/UserImage';
import api from './Axios.js';

function App() {

  const [ gitHubData, setGitHubData ] = useState([]);
  const [ userName, setUserName ] = useState();
  const [ inputText, setInputText ] = useState();
  const [ usuariosPesquisados, setUsuariosPesquisados ] = useState([]);

  useEffect( () => {
    api.get(`users/${userName}`)
      .then( ({data}) => {
        setGitHubData(data);
        addUsuarioPesquisado(userName);
      })
  }, [userName])

  const searchUser = (userName) => {
    setUserName(userName);
    console.log(gitHubData)
  }

  const addUsuarioPesquisado = (name) => {
    const users = Array.from(usuariosPesquisados);
    users.push(name)
    setUsuariosPesquisados(users);
  }

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

      

    </div>
  );

}

export default App;