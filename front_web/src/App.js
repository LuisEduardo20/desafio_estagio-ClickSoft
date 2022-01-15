import React from 'react';
import { useState } from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import api from './config/Axios.js';
import ListaVisualizados from './components/usuarios_visualizados';
import UserInfo from './components/user_info';
import UserModal from './views/modal_perfil';
import GitHubIcon from './components/github_icon';
import {Screen,
        Header, 
        SearchArea,
        Main,
        UserData,
        UsuariosVisualizados, 
        Title,
        SearchInput, 
        SearchButton, } from './styles';

function App() {

  const [ gitHubData, setGitHubData ] = useState([]);
  // const [ userName, setUserName ] = useState();
  const [ inputText, setInputText ] = useState(null);
  const [ usuariosPesquisados, setUsuariosPesquisados ] = useState([]);
  const [ nomesPesquisados, setNomesPesquisados ] = useState([]);
  const [ repos, setRepos ] = useState();
  const [ modalVisible, setModalVisible ] = useState(false);


  const handleSearchUser = (userName) => {
    api.get(`users/${userName}`)
      .then( ({data}) => {
        setGitHubData(data);
        setNomesPesquisados(data.name);
        addUsuarioPesquisado(data);

        api.get(`users/${userName}/repos`)
          .then(({data}) => { setRepos(data); })
          .catch(() => window.alert('Usuário não encontrado'))
          
      })
      .catch(() =>  window.alert('Usuário não encontrado'))

  }


  const addUsuarioPesquisado = (data) => {

    const names = [...nomesPesquisados, data.name]
    setNomesPesquisados(names);

    if(!nomesPesquisados.includes(data.name)) {
      const users = [...usuariosPesquisados, data];
      setUsuariosPesquisados(users);
    }

  }
  

  return (
    <Screen >
      <GlobalStyles></GlobalStyles>

      <UsuariosVisualizados>
        <ListaVisualizados 
          users={usuariosPesquisados} 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible} 
          func={handleSearchUser}
        />
      </UsuariosVisualizados>

      <Main>
        <Header>

          <GitHubIcon />

          <Title>GitHub Users</Title>

          <SearchArea>

            <SearchInput onChange={ e => setInputText(e) } placeholder="Ex: LuisEduardo20" />

            <SearchButton 
              onClick={ () => {

                if(inputText){
                  const name = inputText.target.value;
                  handleSearchUser(name);
                }
                else window.alert('Preencha um nome no campo.')

              }
            }>
              Pesquisar
            </SearchButton>

          </SearchArea>
        </Header>

        <UserData>
          <UserInfo 
            gitHubData={gitHubData} 
            modalVisible={modalVisible} 
            setModalVisible={setModalVisible} 
          />
        </UserData>

      </Main>

      <UserModal 
        gitHubData={gitHubData} 
        repos={repos} 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible}
      />
    </Screen>
  );

}

export default App;