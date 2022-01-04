import {Screen,
        Header, 
        SearchArea,
        Main,
        UserData,
        UsuariosVisualizados, 
        Title,
        SearchInput, 
        SearchButton, } from './styles';
import GlobalStyles from "./styles/GlobalStyles";
import { useState, useEffect } from 'react';
import ListaVisualizados from './components/usuarios_visualizados';
import UserInfo from './components/user_info';
import api from './config/Axios.js';
import UserModal from './views/modal_perfil';

function App() {

  const [ gitHubData, setGitHubData ] = useState([]);
  const [ userName, setUserName ] = useState();
  const [ inputText, setInputText ] = useState();
  const [ usuariosPesquisados, setUsuariosPesquisados ] = useState([]);
  const [ nomesPesquisados, setNomesPesquisados ] = useState([]);
  const [ repos, setRepos ] = useState();
  const [ modalVisible, setModalVisible ] = useState(false);


  const searchUser = (userName) => { setUserName(userName); }


  const addUsuarioPesquisado = (data) => {
    const names = [...nomesPesquisados, data.name]
    setNomesPesquisados(names);

    if(!nomesPesquisados.includes(data.name)) {
      const users = [...usuariosPesquisados, data];
      setUsuariosPesquisados(users);
    }
  }    
  
  
  useEffect( () => {
    api.get(`users/${userName}`)
    .then( ({data}) => {
      setGitHubData(data);
      setNomesPesquisados(data.name);
      addUsuarioPesquisado(data);
    })

    api.get(`users/${userName}/repos`)
      .then(({data}) => { setRepos(data); })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userName]);


  return (
    <Screen >
      <GlobalStyles></GlobalStyles>

      <UsuariosVisualizados>
        <ListaVisualizados 
          users={usuariosPesquisados} 
          modalVisible={modalVisible} 
          setModalVisible={setModalVisible} 
          setUserName={setUserName} 
        />
      </UsuariosVisualizados>

      <Main>

        <Header>
          <img src="https://cdn.discordapp.com/attachments/914144800050143242/927737559210147890/icon_github.png" alt="Ícone do GitHub" />
          <Title>GitHub Users</Title>
          <SearchArea>
            <SearchInput onChange={ e => setInputText(e) } placeholder="Ex: LuisEduardo20" />
            <SearchButton 
              onClick={ () => {
                const name = inputText.target.value;
                searchUser(name);
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