function ListaTecnologias() {
  const tecnologias = ["python", "react", "typescript", "git"];

  return (
    <>
      <h2>Lista de Tecnologias</h2>
      <ul style={{ listStyle: "none" }}>
        {tecnologias.map((t) => {
          return <li>{t}</li>;
        })}
      </ul>
    </>
  );
}

export default ListaTecnologias;
