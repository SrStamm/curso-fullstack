// servidor.js
import { createServer } from "node:http";
import { tarefas } from "./dados.js"; // importamos os dados do outro módulo

const servidor = createServer((req, res) => {
  console.log(`Pedido recebido: ${req.method} ${req.url}`);

  // ROTA 1: página inicial
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify({ mensagem: "Bem-vindo à API de Tarefas!" }));
    return; // importante: paramos aqui para não cair nas rotas seguintes
  }

  // ROTA 2: lista de tarefas
  if (req.method === "GET" && req.url === "/tarefas") {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(tarefas));
    return;
  }

  if (req.method === "GET" && req.url === "/tarefas/concluidas") {
    const concluidas = tarefas.filter((t) => t.concluida === true);
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
    res.end(JSON.stringify(concluidas));
  }

  // SE NADA BATER CERTO: 404 (não encontrado)
  res.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));
});

const PORTA = 3000;
servidor.listen(PORTA, () => {
  console.log(`Servidor a correr em http://localhost:${PORTA}`);
});
