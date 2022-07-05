const MovieListPanel = (props) => {
  const peliculas = props.peliculas;
  const cambiaEstadoEditar = props.cambiaEstadoEditar;
  const cambiaEstadoObjeto = props.cambiaEstadoObjeto;

  return ( 
    <>
      <h2 className="fw-bold text-center pt-2 mb-4 mt-4">Listado de Peliculas</h2>
      <div className="mb-5 ">
        <table className="table table-default table-hover">
          <thead>
            <tr className="fila-encabezado">
              <th scope="col">#</th>
              <th scope="col">T&iacute;tulo</th>
              <th scope="col">Lanzamiento</th>
              <th scope="col">G&eacute;nero</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              peliculas?.map( (list, i) => (
                <tr key={i} className="fila-datos">
                  <th scope="row" >{i + 1}</th>
                  <td >{list.titulo}</td>
                  <td>{list.lanzamiento.split('T')[0]}</td>
                  <td>{list.genero}</td>
                  <td>
                    <button
                      onClick={() => {
                        cambiaEstadoEditar(true);
                        cambiaEstadoObjeto(list);
                      }}
                      className="btn boton-login"
                    >
                      Editar
                    </button>
                  </td>
                </tr> 
              ))
            }

          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieListPanel;