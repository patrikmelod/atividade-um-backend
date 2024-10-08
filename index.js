import { exercicio_um } from "./src/Exercicios.js";
import { exercicio_dois } from "./src/Exercicios.js";
import { exercicio_tres } from "./src/Exercicios.js";
import { exercicio_quatro } from "./src/Exercicios.js";
import { exercicio_cinco } from "./src/Exercicios.js";
import { exercicio_seis } from "./src/Exercicios.js";
import { exercicio_sete } from "./src/Exercicios.js";
import { exercicio_oito } from "./src/Exercicios.js";
import { exercicio_nove } from "./src/Exercicios.js";
import { exercicio_dez } from "./src/Exercicios.js";


console.log("----- Exercício 01 -----\n")
console.log(exercicio_um(4));
console.log("\n\n")

console.log("----- Exercício 02 -----\n")
console.log(exercicio_dois(3, "Olá, mundo!"))
console.log("\n\n")

console.log("----- Exercício 03 -----\n")
console.log(exercicio_tres(1, 2, "soma"))
console.log(exercicio_tres(5, 2, "subtracao"))
console.log(exercicio_tres(6, 2, "multiplicacao"))
console.log(exercicio_tres(10, 2, "divisao"))
console.log(exercicio_tres(1, 0, "divisao"))
console.log(exercicio_tres(0, 0, "invalido"))
console.log("\n\n")

console.log("----- Exercício 04 -----\n")
console.log(exercicio_quatro(3))
console.log("\n\n")

console.log("----- Exercício 05 -----\n")
console.log(exercicio_cinco(12345))
console.log("\n\n")

console.log("----- Exercício 06 -----\n")
console.log(exercicio_seis("Palavras vogais contagem"))
console.log("\n\n")

console.log("----- Exercício 07 -----\n")
console.log(exercicio_sete("{{[]}}()()"))
console.log(exercicio_sete("{{[]}}()()(((([[]"))
console.log("\n\n")

console.log("----- Exercício 08 -----\n")
console.log(exercicio_oito(50))
console.log("\n\n")

console.log("----- Exercício 09 -----\n")
console.log(exercicio_nove(exercicio_oito(10)))
console.log("\n\n")

console.log("----- Exercício 10 -----\n")
console.log(exercicio_dez(exercicio_oito(5), "id"))
console.log(exercicio_dez(exercicio_oito(5), "nome"))
console.log(exercicio_dez(exercicio_oito(5), "idade"))
console.log("\n\n")