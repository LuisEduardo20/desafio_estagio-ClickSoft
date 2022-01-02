import {Header, 
        SearchArea,
        Main,
        UserData,
        UsuariosVisualizados, 
        Title, 
        SearchInput, 
        SearchButton, } from './styles';
import { useState, useEffect } from 'react';
import ListaVisualizados from './components/usuarios_visualizados';
import UserInfo from './components/user_info';
import api from './Axios.js';
import UserModal from './views/modal_perfil';

function App() {

  const [ gitHubData, setGitHubData ] = useState([]);
  const [ userName, setUserName ] = useState();
  const [ inputText, setInputText ] = useState();
  const [ usuariosPesquisados, setUsuariosPesquisados ] = useState([]);
  const [ repos, setRepos ] = useState();
  const [ modalVisible, setModalVisible ] = useState(false);

  
  const searchUser = (userName) => { setUserName(userName); }


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

    api.get(`users/${userName}/repos`)
      .then(({data}) => { setRepos(data); console.log(data) })
  }, [userName]);


  useEffect( () => {

  }, []);


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
        <UserModal gitHubData={gitHubData} repos={repos} modalVisible={modalVisible} setModalVisible={setModalVisible} />

        <UsuariosVisualizados>
          {/* <ListaVisualizados users={usuariosPesquisados} func={searchUser} /> */}
          <ListaVisualizados users={gitHubData} func={searchUser} />
        </UsuariosVisualizados>

        <UserData>
          <UserInfo gitHubData={gitHubData} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </UserData>
      </Main>
      
    </div>
  );

}

export default App;