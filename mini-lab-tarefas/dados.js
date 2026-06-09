// dados.js
// A nossa "base de dados" provisória: uma lista de tarefas guardada em memória.

import { readFile } from "node:fs/promises";

const conteudo = await readFile("./dados.json", "utf-8");
export const tarefas = JSON.parse(conteudo);
