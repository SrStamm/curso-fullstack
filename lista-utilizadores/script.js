let listaUtilizadoresGlobal = [];

class Utilizador {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  // Mostra o Utilizador na interfaz
  mostrarNoDOM(listaElement) {
    const elemento = document.createElement("li");
    const div = document.createElement("div");
    const pNome = document.createElement("p");
    const eNome = document.createElement("p");

    pNome.textContent = `${this.nome}`;
    eNome.textContent = `${this.email}`;

    div.classList.add("user-data");
    div.appendChild(pNome);
    div.appendChild(eNome);

    const button = document.createElement("button");
    button.innerText = "Remover";

    elemento.append(div);
    elemento.append(button);

    listaElement.appendChild(elemento);

    button.addEventListener("click", () => {
      this.removerDaLista(this.nome);
    });
  }

  // Remove da lista o Utilizador
  removerDaLista(nome) {
    listaUtilizadoresGlobal = listaUtilizadoresGlobal.filter(
      (item) => item.nome !== nome,
    );

    atualizarInterfaz();
  }
}

class UtilizadorAPI {
  constructor(url) {
    this.url = url;
  }

  // Procura na API os Utilizadores
  async buscarUtilizadores() {
    const listaUtilizadores = [];

    try {
      const response = await fetch(this.url);
      const json = await response.json();

      json.forEach((element) => {
        const newUtilizador = new Utilizador(element.name, element.email);
        listaUtilizadores.push(newUtilizador);
      });

      return listaUtilizadores;
    } catch (error) {
      return [];
    }
  }
}

const api = new UtilizadorAPI("https://jsonplaceholder.typicode.com/users");
const btn = document.querySelector("#carregarBtn");
const lista = document.querySelector("#listaUtilizadores");

// atualiza a interfaz
function atualizarInterfaz() {
  lista.innerHTML = "";

  listaUtilizadoresGlobal.forEach((e) => e.mostrarNoDOM(lista));
}

btn.addEventListener("click", async () => {
  lista.innerHTML = "";

  listaUtilizadoresGlobal = await api.buscarUtilizadores();
  atualizarInterfaz();
});
