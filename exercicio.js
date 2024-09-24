// Função de multiplicação
function multiplicar(a, b) {
    return a * b;
}
// Função de saudação
function saudar(nome) {
    return "Ol\u00E1 ".concat(nome);
}
var resultadoMultiplicacao = multiplicar(5, 3);
var saudacao = saudar("Yudi");
console.log(resultadoMultiplicacao); // Exibe: 15
console.log(saudacao); // Exibe: Olá Lucas
