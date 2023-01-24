//exercícios: fundamentos - dia 3.1 (javascript primeiros passos)

// Nos exercícios de hoje, você vai elaborar alguns códigos de acordo com o que é pedido no enunciado. Todos trabalham a lógica condicional (if/else e switch/case), operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). Para que consiga executar seus códigos, recomendamos que utilize a extensão Code Runner. Você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.

// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
// const z = 7;
// const w = 9;

// let soma = z + w;{
//     console.log (soma)
// }

// let subtracao = z - w;{
//     console.log (subtracao)
// }

// let multiplicacao = z * w;{
//     console.log (multiplicacao)
// }

// let divisao = z / w;{
//     console.log (divisao)
// }

// let modulo = z % w;{
//     console.log (modulo)
// }


// // Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
// const z = 9
// const w = 7

// if (z > w) {
//     console.log ("'z' é maior que 'w'")
// }
// else {
//     console.log ("'w' é maior que 'z'")
// }


// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
// const z = 9;
// const w = 7;
// const y = 27;

// if (z > w && z > y) {
//     console.log ('o maior número é:', z);
// } else if (w > z && w > y) {
//     console.log('o maior número é:', w);
//   } else {
//     console.log('o maior número é:', y);
//   }; 


// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
// const z = -9;

// if (z > 0) {
//     console.log('positivo');
// } else if (z < 0) {
//     console.log('negativo');
// } else {
//     console.log('zero');
//   };


// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.
// const z = 60;
// const w = 60;
// const y = -60;

// let somaDosangulos = z + w + y;

// let todosAngulosSaoPositivos = z > 0 && w > 0 && y > 0;

// if (todosAngulosSaoPositivos){
//   if (somaDosangulos === 180) {
//     console.log(true);
//   } else {
//     console.log(false);
//   };
// } else {
//   console.log('ângulo inválido');
// }


// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
// const pecaDeXadrez = 'rainha';

// switch (pecaDeXadrez.toLowerCase()) {
//   case 'rei':
//     console.log('rei-> uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('bispo-> diagonal.');
//     break;
//   case 'rainha':
//     console.log('rainha-> diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log("cavalo -> 'L' pode pular sobre as peças.");
//     break;
//   case 'torre':
//     console.log('torre -> horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log('peão -> apenas uma casa para frente, no primeiro movimento podem ser duas casas.');
//     break;
//   default:
//     console.log('peça inválida!');
//     break;
// };


// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = 560;

if (nota < 0 || nota > 100) {
    console.log('erro, nota inválida');
} else if (nota >= 90) {
    console.log('A')
} else if (nota >= 80) { 
    console.log('B')
} else if (nota >= 70) {
    console.log('C')
} else if (nota >= 60) {
    console.log('D')
} else if (nota >= 50) {
    console.log('E')
} else {
    console.log('F')
}