import { useState } from "react";

function ListaTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");

  function adicionar() {
    if (novaTarefa.trim() === "") return;
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  }

  function remover(indice) {
    const novaLista = tarefas.filter((_, i) => i !== indice);
    setTarefas(novaLista);
  }

  return (
    <div>
      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Nova tarefa..."
      />
      <button onClick={adicionar}>Adicionar</button>

      {tarefas.length == 0 ? (
        <p>Ainda não tens tarefas 🎉</p>
      ) : (
        <ul className="lista-tarefas">
          {tarefas.map((t, index) => (
            <li className="card-tarefa">
              <p key={index}>{t}</p>
              <button onClick={() => remover(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaTarefas;
