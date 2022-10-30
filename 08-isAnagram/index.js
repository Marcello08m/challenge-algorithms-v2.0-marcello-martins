export function isAnagram(word1, word2) {
  // implementar logica aqui
  let palaminu1 = word1.toLowerCase();
  let palaminu2 = word2.toLowerCase();
  palaminu1 = palaminu1.split('')
  palaminu2 = palaminu2.split('')
  palaminu1 = palaminu1.sort()
  palaminu2 = palaminu2.sort()
  palaminu1 = palaminu1.join('')
  palaminu2 = palaminu2.join('')
  if(palaminu1 == palaminu2){
    return true;
  }
  return false;
}