const ListaVisualizados = ({users, func}) => {
  return (
    <>
      <h3>Visualizados recentemente</h3>
      { users.map( (user, index) => (
          <li key={`item${index}`}>
            <button onClick={() => {func(user)}}> {user} </button>
          </li>
        ))}
    </>
  );
}

export default ListaVisualizados;