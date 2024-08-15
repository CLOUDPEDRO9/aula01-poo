//Importar a classe que quero utilizar
import { Pessoa } from './Pessoa';

// Instanciar (criar objeto)
const pessoa1: Pessoa = new Pessoa('Ronaldinho', 42);
const pessoa2: Pessoa = new Pessoa('Ademir', 70);

console.log(pessoa1.aniversario());
console.log(pessoa2.correr());