export function fibonacci(value,memo = {}) {
  // implementar logica aqui
  if(value < 0) return 0;
  if(value < 2) return value;
  if(memo[value]) return memo[value];
  let result = fibonacci(value - 1, memo) + fibonacci(value - 2, memo);
  memo[value] = result;
  return result;
}