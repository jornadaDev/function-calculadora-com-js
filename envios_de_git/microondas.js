function microondas(comida, tempo) {
  // botao para pipoca = 1
  // botao para macarrao = 2
  // botao para carne = 3
  // botao para  feijao = 4
  // botao para brigadeiro =5

  if (comida == 1 && tempo == 10) {
    console.log('prato pronto, bom apetite!!!')
  } else if (comida == 1 && tempo < 10) {
    console.log('tempo insuficiente')
  } else if (comida == 1 && tempo >= 3 * 10) {
    console.log('kabumm')
  } else if (comida == 1 && tempo >= 2 * 10) {
    console.log('a comida queimou')
  } else if (comida == 1 && tempo > 10 && tempo < 20) {
    console.log('cuidado, prato quente')
  }
  // pula uma linha
  /////////////////////////////
  else if (comida == 2 && tempo == 8) {
    console.log('prato pronto, bom apetite!!!')
  } else if (comida == 2 && tempo < 8) {
    console.log('tempo insuficiente')
  } else if (comida == 2 && tempo >= 3 * 8) {
    console.log('kabumm')
  } else if (comida == 2 && tempo >= 2 * 8) {
    console.log('a comida queimou')
  } else if (comida == 2 && tempo > 8 && tempo < 16) {
    console.log('cuidado, prato quente')
  }
  // pula uma linha
  /////////////////////////////
  else if (comida == 3 && tempo == 15) {
    console.log('prato pronto, bom apetite!!!')
  } else if (comida == 3 && tempo < 15) {
    console.log('tempo insuficiente')
  } else if (comida == 3 && tempo >= 3 * 15) {
    console.log('kabumm')
  } else if (comida == 3 && tempo >= 2 * 15) {
    console.log('a comida queimou')
  } else if (comida == 3 && tempo > 15 && tempo < 30) {
    console.log('cuidado, prato quente')
  }
  // pula uma linha
  /////////////////////////////
  else if (comida == 4 && tempo == 12) {
    console.log('prato pronto, bom apetite!!!')
  } else if (comida == 4 && tempo < 12) {
    console.log('tempo insuficiente')
  } else if (comida == 4 && tempo >= 3 * 12) {
    console.log('kabumm')
  } else if (comida == 4 && tempo >= 2 * 12) {
    console.log('a comida queimou')
  } else if (comida == 4 && tempo > 12 && tempo < 24) {
    console.log('cuidado, prato quente')
  }
  // pula uma linha
  /////////////////////////////
  else if (comida == 5 && tempo == 8) {
    console.log('prato pronto, bom apetite!!!')
  } else if (comida == 5 && tempo < 8) {
    console.log('tempo insuficiente')
  } else if (comida == 5 && tempo >= 3 * 8) {
    console.log('kabumm')
  } else if (comida == 5 && tempo >= 2 * 8) {
    console.log('a comida queimou')
  } else if (comida == 5 && tempo > 8 && tempo < 16) {
    console.log('cuidado, prato quente')
  } else {
    console.log('prato inexistente')
  }
}
/////////////////////////////
//  TESTE
// microondas(1, 1)
// microondas(2, 1)
// microondas(3, 1)
// microondas(4, 1)
// microondas(5, 1)
// microondas(1, 20)
// microondas(2, 16)
// microondas(3, 30)
// microondas(4, 24)
// microondas(5, 16)
// microondas(1, 30)
// microondas(2, 24)
// microondas(3, 45)
// microondas(4, 36)
// microondas(5, 24)
// microondas(1, 10)
// microondas(2, 8)
// microondas(3, 15)
// microondas(4, 12)
// microondas(5, 8)
// microondas(7, 8)
// microondas(1, 15)
