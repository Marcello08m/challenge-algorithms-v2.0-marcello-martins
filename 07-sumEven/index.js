export function sumEven(value) {
  // implementar logica aqui
  value.forEach(element => {
    if(element % 2 === 0)
      resposta += element
  });
  return resposta;
}