// função soma
function soma(n1, n2) {
  let resultado = n1 + n2
  return resultado
}
console.log(soma(50, 50))

// funcao subtracao
function subtracao(n1, n2) {
  let resultado = n1 - n2
  return resultado
}

console.log(subtracao(100, 50))

// funcao multiplicacao
function multiplica(n1, n2) {
  let resultado = n1 * n2
  return resultado
}
console.log(multiplica(2, 5))

// funcao divisao
function divisao(n1, n2) {
  let resultado = n1 / n2
  return resultado
}
console.log(divisao(10, 2))

// nivel 2
console.log('teste de operações/calculadora')
console.log(soma(50, 50))
console.log(subtracao(100, 50))
console.log(multiplica(2, 5))
console.log(divisao(10, 2))
console.log(divisao(10, 0))

// funcao quadra do donumero
function quadradoDoNumero(n) {
  let resultado = multiplica(n, n)
  return resultado
}
console.log(quadradoDoNumero(2))

// funcao media dos numeros
function media(n1, n2, n3) {
  let resultado = soma(n1, n2)
  let resultado2 = soma(resultado, n3)
  let dividir = divisao(resultado2, 3)
  return dividir
}

console.log(media(2, 2, 2))

// funcao porcentagem
function porcentagem(v, p) {
  let dividir = divisao(p, 100)
  let segundopasso = multiplica(dividir, v)
  return segundopasso
}

console.log(porcentagem(300, 15))

// funcao geradorDePorcentagem
function geradorDePorcentagem(vr, vb) {
  let primeiroPasso = multiplica(vr, 100)
  let segundoPasso = divisao(primeiroPasso, vb)
  return segundoPasso
}
console.log(geradorDePorcentagem(2, 200))
