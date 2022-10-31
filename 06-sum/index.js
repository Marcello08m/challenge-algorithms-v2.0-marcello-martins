export function sum(values) {
  // implementar logica aqui
  return values.reduce((totalnum, atualnum) => {
    return totalnum + atualnum
  }, 0)
}