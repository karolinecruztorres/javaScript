var array = ['k', 'a', 'r', 'o', 'l']
var minhaDiv = document.getElementById('minha-div')
var paragrafo = document.createElement('p')
paragrafo.innerText = array.join('-')
minhaDiv.appendChild(paragrafo) 
