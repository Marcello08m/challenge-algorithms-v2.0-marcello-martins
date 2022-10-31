export function longestWords(words) {
    // implementar logica aqui
    let lista = [];
    words.forEach(palavra => {
        if(!lista[0] || lista[0].length < palavra.length){
            lista = [palavra]
        } else if(lista[0].length == palavra.length){
            lista.push(palavra)
        }
    });
    return lista;
}