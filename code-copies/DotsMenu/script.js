let navigation = document.querySelector('.navigation');
let color = document.querySelector('#inputColor');
let body = document.querySelector('body');
let spanColor = document.querySelector('#spanColor');

function onClickContainer(event) {
    if (event.target.id === 'inputColor') {
        event.target.removeEventListener('click', onClickContainer);
    } else {
        navigation.classList.toggle('active');
    }
}

navigation.addEventListener('click', onClickContainer);

color.addEventListener('input', function() {
  document.body.style.backgroundColor = color.value;
  document.documentElement.style.setProperty('--icon-hover-color', color.value);
});
