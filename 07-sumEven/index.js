export function sumEven(value) {
  // implementar logica aqui
  let resposta = 0
  value.forEach(element => {
    if(element % 2 === 0)
      resposta += element
  });
  return resposta;
}