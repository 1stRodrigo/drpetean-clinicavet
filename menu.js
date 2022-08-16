const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const btnAtendimentos = document.getElementById('btn-atend');

function toggleAtend(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const options = document.getElementById('divoptions');
    options.classList.toggle('active')
}

btnAtendimentos.addEventListener('click', toggleAtend);
btnAtendimentos.addEventListener('touchstart', toggleAtend);
