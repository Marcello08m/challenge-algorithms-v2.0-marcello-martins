export function mostUsedChar(text) {
    // implementar logica aqui
    let caractercount = 0; let caractersave = {}; let caracter = " ";
    text.split("").forEach((repetido) => {
        if(caractersave[repetido]){
            caractersave[repetido] += 1;
        } else{
            caractersave[repetido] = 1;
        }
        if(caractersave[repetido] > caractercount){
            caractercount = caractersave[repetido];
            caracter = repetido;
        }
    });
    return caracter;
}