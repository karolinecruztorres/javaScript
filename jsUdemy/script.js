function entrar() {
    var bemVindo = document.getElementById('bem-vindo')
    var texto = prompt('Digite seu nome:')

    if (texto == '' || texto == null) {
        do {
            alert('Para entrar, digite seu nome:')
            var texto = prompt('Digite seu nome:')
            bemVindo.innerHTML = `Bem vindo(a), ${texto}`
        } while (texto == '' || texto == null)    
    } else {
        bemVindo.innerHTML = `Bem vindo(a), ${texto}`
    }
}