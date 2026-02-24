class Utilizador {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  mostrarNoDOM(listaElement) {
    const elemento = document.createElement("li");
    elemento.textContent = `${this.nome} - ${this.email}`;
    listaElement.appendChild(elemento);
  }
}

class UtilizadorAPI {
  constructor(url) {
    this.url = url;
  }

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

const btn = document.querySelector("#carregarBtn");
const lista = document.querySelector("#listaUtilizadores");
const api = new UtilizadorAPI("https://jsonplaceholder.typicode.com/users");

btn.addEventListener("click", async () => {
  lista.innerHTML = "";

  const listaUtilizadores = await api.buscarUtilizadores();

  listaUtilizadores.forEach((e) => {
    e.mostrarNoDOM(lista);
  });
});
