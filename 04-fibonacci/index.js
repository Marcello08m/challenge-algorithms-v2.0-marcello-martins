export function fibonacci(value) {
  // implementar logica aqui
  if(value < 0) return 0;
  if(value < 2) return value;
  if(memo[value]) return memo[value];
  let result = fibonacci(value - 1, memo) + fibonacci(value - 2, memo);
  memo[value] = result;
  console.log(memo);
  return result;
}