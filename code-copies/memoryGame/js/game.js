const grid = document.querySelector('.grid');

const characters = [
    'image1', 
    'image2', 
    'image3', 
    'image4', 
    'image5', 
    'image6', 
    'image7', 
    'image8', 
    'image9', 
    'image10', 
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disabled-card');
    if(disabledCards.length == 20) {
        alert('Parabéns, você conseguiu!');
    }
}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firstCharacter == secondCharacter) {
        firstCard.firstChild.classList.add('disabled-card');
        secondCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';

        }, 500);
    }
}

const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal-card')){
        return;
    }

    if (firstCard == '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard == '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }
} 

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character);

    return card;
}

const loadGame = () => {
    const duplicateCharacteres = [...characters, ...characters];
    const shuffluedArray = duplicateCharacteres.sort(() => Math.random() - 0.5);

    shuffluedArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();