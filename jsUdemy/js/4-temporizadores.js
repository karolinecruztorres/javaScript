function acao() {
    document.getElementById('contando').innerHTML += '<p>Tarããã!</p>'
}

var timer = setInterval(acao, 1000) 
if (timer < 5) {
    clearInterval(timer) /* Função que para a contagem*/
}

setTimeout(acao, 4000)
