const ListaVisualizados = ({users, func}) => {
  return (
    <>
      <h3>Visualizados recentemente</h3>
      { users.map( (user) => (
          <p> {user} </p>
        ))}
    </>
  );
}

export default ListaVisualizados;