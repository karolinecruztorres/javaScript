var nome = ''
if (typeof localStorage.nome == 'undefined') {
    localStorage.nome = prompt('Digite seu nome: ')
}

var nome = localStorage.nome
document.getElementById('nome').innerHTML = nome
