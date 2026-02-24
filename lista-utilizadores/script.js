class Utilizador {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

class UtilizadorAPI {
  async buscarUtilizadores() {
    const listaUtilizadores = [];

    try {
      const response = await fetch();
      const json = await response.json();

      json.array.forEach((element) => {
        const newUtilizador = new Utilizador(element);
        listaUtilizadores.push(newUtilizador);
      });

      return listaUtilizadores;
    } catch (error) {
      return [];
    }
  }
}
