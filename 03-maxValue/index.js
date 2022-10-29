export function maxValue(values) {
  // implementar logica aqui
  if (values.length == 0){
    return 0;
  }
  return values.reduce((maiornum,atualnum) => {
    if(maiornum > atualnum){
      return maiornum;
    }
    else{
      return atualnum;
    }
  })
}