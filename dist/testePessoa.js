"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar a classe que quero utilizar
const Pessoa_1 = require("./Pessoa");
// Instanciar (criar objeto)
const pessoa1 = new Pessoa_1.Pessoa('Ronaldinho', 42);
const pessoa2 = new Pessoa_1.Pessoa('Ademir', 70);
console.log(pessoa1.aniversario());
console.log(pessoa2.correr());
//# sourceMappingURL=testePessoa.js.map