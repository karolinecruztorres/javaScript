
//arrow function (outra forma de excrever função anonima)
const sayMyName = (parameter) => {
    console.log(parameter);
}
sayMyName("karoline");

//function constructor (Cria novo objeto)
function Person(name) {
    this.name = name;
    this.walk = function() {
        return `${this.name} está andando`;
    };
}

const karol = new Person("Karol");
const carlos = new Person("Carlos");
console.log("karol");
console.log(karol.walk());
console.log("carlos");
console.log(carlos.walk());

//Contar quantos dígitos tem um número
let word = "Paralelepípedo";
console.log(word.length);
//let number = 123456789;
//console.log(String(number).length);

//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula. Quando altera ponto por vírgula, transforma o número em string 
let number = 3005.12345;
console.log(number.toFixed(2).replace(".", ","));

//letras maiúsculas e minúsculas
let phrase = "Olha só, que bonito!";
console.log(phrase.toLowerCase().toUpperCase());

//Separa um texto que contem espaços em um array onde cada texto é uma posição do array. Depois, transforma o array em um texto e onde eram espaço, coloca _ e transforma em minúsulo
let phrase1 = "Eu quero viver o Amor!";
let myArray = phrase1.split(" ");
console.log(myArray);

let phrase1WithUnderscore = myArray.join("_");
console.log(phrase1WithUnderscore.toLowerCase());

//Verificar se o texto contém a palavra "Amor" (função é case sensitive)
let phrase2 = "Eu quero viver o Amor!";
console.log(phrase2.includes("Amor"));

//Transformar uma cadeia de caracteres em elementos de um array
let word1 = "manipulaçao";
console.log(Array.from(word1));



let techs = ["html", "css", "js"];

//adiciona um ítem no fim
techs.push("nodejs");
//adiciona um ítem no começo
techs.unshift("sql");
//remove um ítem no fim
    //techs.pop();
//remove um ítem no começo
    //techs.shift();
//pegar somente alguns elementos do array
    //console.log(techs.slice(1, 3));
//remover 1 ou mais itens em qualquer posição do array
    //techs.splice(1,2);
//encontrar a posição de um elemento no array
let posicao = techs.indexOf("css");
techs.splice(posicao, 1);

console.log(techs);
console.log(posicao);