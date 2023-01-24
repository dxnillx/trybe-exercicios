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
// const nota = 560;

// if (nota < 0 || nota > 100) {
//     console.log('erro, nota inválida');
// } else if (nota >= 90) {
//     console.log('A')
// } else if (nota >= 80) { 
//     console.log('B')
// } else if (nota >= 70) {
//     console.log('C')
// } else if (nota >= 60) {
//     console.log('D')
// } else if (nota >= 50) {
//     console.log('E')
// } else {
//     console.log('F')
// }


// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.
// const w = 7;
// const z = 9;
// const y = 15;

// let numPar = false;

// if ((w % 2 === 0 || z % 2 === 0 || y % 2 === 0)) {
//   numPar = true;
// };
// console.log(numPar);


// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.
// const w = 8;
// const z = 6;
// const y = 16;

// let numImpar = false;

// if ((w % 2 !== 0 || z % 2 !== 0 || y % 2 !== 0)) {
//   numImpar = true;
// };
// console.log(numImpar);


// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;// lucro = valorVenda - valorCustoTotal (lucro de um produto);
// const custoDoProduto = 80;
// const valorDeVenda = 160;

// if (custoDoProduto >= 0 && valorDeVenda >= 0) {
//     const custoTotal = custoDoProduto * 1.2;
//     const lucro = (valorDeVenda - custoTotal) * 1000;
//     console.log(lucro);
//   } else {
//     console.log('erro: os valores não podem ser menores que zero');
//   };


// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)

// Salário bruto até R$ 1.556,94: alíquota de 8%

// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%

// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%

// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)

// Até R$ 1.903,98: isento de imposto de renda

// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto

// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto

// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto

// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.

// Resultado: R$ 2.612,55.
let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 4200.00;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    aliquotaINSS = salarioBruto * 0.11;
} else {
    aliquotaINSS = 570.88;
};

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
    aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
    aliquotaIR = (salarioBase * 0.275) - 869.36;
};
  
  console.log('salário líquido: ' + (salarioBase - aliquotaIR));