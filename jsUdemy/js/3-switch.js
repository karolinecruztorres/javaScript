var opcoes = document.getElementById('opcoes')
opcoes.innerHTML += '<p> >>>MENU<<< | 1 - Bolo | 2 - Salgado | 3 - Suco | 4 - Vitamina</p>'

function menu() {
    let opcao = prompt('Escolha uma opção:')

    switch (opcao) {
        case '1':
            alert('Escolheu um bolo')        
            break;
        case '2':
            alert('Escolheu um salgado')        
            break;
        case '3':
            alert('Escolheu um suco')        
            break;
        case '4':
            alert('Escolheu uma vitamina')        
            break;
        default:
            alert('Não existe essa opção no menu. Tente novamente.')
            break;
    }  
}