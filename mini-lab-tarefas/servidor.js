// servidor.js
import express from "express";
import { tarefas } from "./dados.js"; // importamos os dados do outro módulo

const app = express();

app.get("/", (req, res) => {
  res.json({ mensagem: "Bem-vindo à API de Tarefas!" });
});

app.get("/tarefas/", (req, res) => {
  res.json(tarefas);
});

app.get("/tarefas/concluidas", (req, res) => {
  res.json(tarefas.filter((t) => t.concluida == true));
});

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

app.listen(3000, () => {
  console.log("Servidor Express em http://localhost:3000");
});
