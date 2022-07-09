function scrollTo(element){
    document.querySelector(element).scrollIntoView({ behavior: "smooth"});
}

document.querySelector('#goToUp').addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#section-readme")
    console.log("go to up")
    const options = document.getElementById('divoptions');
    options.classList.toggle('active')

});


//APARECER RESUMO DIAGNÓSTICOS
/*
const icone1 = document.getElementById('clicar_diag')

function toggleIcon1(event){
    if (event.type === 'touchstart') event.preventDefault()
    const diag = document.getElementById('sobre_diag');
    diag.classList.toggle('active')
    const ball = document.getElementById('ball-bg1');
    ball.classList.toggle('active')
    const vacinas = document.getElementById('sobre_vaci')
    vacinas.style.display = 'none';
    const cast = document.getElementById('sobre_cast')
    cast.style.display = 'none';
    const derma = document.getElementById('sobre_derma')
    derma.style.display = 'none';
    const clin = document.getElementById('sobre_clin')
    clin.style.display = 'none';
}

icone1.addEventListener('click', toggleIcon1);
icone1.addEventListener('touchstart', toggleIcon1);


//APARECER RESUMO VACINAS

const icone2 = document.getElementById('clicar_vac')

function toggleIcon2(event){
    if (event.type === 'touchstart') event.preventDefault()
    const vaci = document.getElementById('sobre_vaci');
    vaci.classList.toggle('active')
    const ball = document.getElementById('ball-bg2');
    ball.classList.toggle('active')
    const diag = document.getElementById('sobre_diag');
    diag.style.display = 'none';
    const cast = document.getElementById('sobre_cast')
    cast.style.display = 'none';
    const derma = document.getElementById('sobre_derma')
    derma.style.display = 'none';
    const clin = document.getElementById('sobre_clin')
    clin.style.display = 'none';
}

icone2.addEventListener('click', toggleIcon2);
icone2.addEventListener('touchstart', toggleIcon2);
*/
/*
//APARECER RESUMO CASTRAÇÕES

const icone3 = document.getElementById('clicar_cast')

function toggleIcon1(event){
    if (event.type === 'touchstart') event.preventDefault()
    const diag = document.getElementById('sobre_diag');
    diag.classList.toggle('active')
    const ball = document.getElementById('ball-bg1');
    ball.classList.toggle('active')
    const vacinas = document.getElementById('sobre_vaci')
    vacinas.style.display = 'none';
    const cast = document.getElementById('sobre_cast')
    cast.style.display = 'none';
    const derma = document.getElementById('sobre_derma')
    derma.style.display = 'none';
    const clin = document.getElementById('sobre_clin')
    clin.style.display = 'none';
}

icone.addEventListener('click', toggleIcon1);
icone.addEventListener('touchstart', toggleIcon1);

//APARECER RESUMO DERMATOLOGIA

const icone4 = document.getElementById('clicar_derma')

function toggleIcon1(event){
    if (event.type === 'touchstart') event.preventDefault()
    const diag = document.getElementById('sobre_diag');
    diag.classList.toggle('active')
    const ball = document.getElementById('ball-bg1');
    ball.classList.toggle('active')
    const vacinas = document.getElementById('sobre_vaci')
    vacinas.style.display = 'none';
    const cast = document.getElementById('sobre_cast')
    cast.style.display = 'none';
    const derma = document.getElementById('sobre_derma')
    derma.style.display = 'none';
    const clin = document.getElementById('sobre_clin')
    clin.style.display = 'none';
}

icone.addEventListener('click', toggleIcon1);
icone.addEventListener('touchstart', toggleIcon1);

//APARECER RESUMO CLINICO GERAL VET

const icone5 = document.getElementById('clicar_clin')

function toggleIcon1(event){
    if (event.type === 'touchstart') event.preventDefault()
    const diag = document.getElementById('sobre_diag');
    diag.classList.toggle('active')
    const ball = document.getElementById('ball-bg1');
    ball.classList.toggle('active')
    const vacinas = document.getElementById('sobre_vaci')
    vacinas.style.display = 'none';
    const cast = document.getElementById('sobre_cast')
    cast.style.display = 'none';
    const derma = document.getElementById('sobre_derma')
    derma.style.display = 'none';
    const clin = document.getElementById('sobre_clin')
    clin.style.display = 'none';
}

icone.addEventListener('click', toggleIcon1);
icone.addEventListener('touchstart', toggleIcon1);
*/
