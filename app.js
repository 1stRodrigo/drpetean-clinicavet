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

//Resumo e Imagem: Diagnósticos
/*
const icon2 = document.getElementsByClassName('b2')

function toggleIcon2(event){
    if (event.type === 'touchstart') event.preventDefault()
    icon2.classList.toggle('active')
    console.log("classe active adicionada")
}
*/

const icone1 = document.getElementById('icone1') //<-- aqui é na label 1
const icone2 = document.getElementById('icone2')
const icone3 = document.getElementById('icone3')
const icone4 = document.getElementById('icone4')
const icone5 = document.getElementById('icone5')

const bola1 = document.getElementById('ball-bg1')
const bola2 = document.getElementById('ball-bg2')
const bola3 = document.getElementById('ball-bg3')
const bola4 = document.getElementById('ball-bg4')
const bola5 = document.getElementById('ball-bg5')

function toggleicone1(event){
    if (event.type === 'touchstart') event.preventDefault()
    const bola1 = document.getElementById('ball-bg1')
    bola1.classList.add('active');
    console.log("classe active adicionada icone1")

    bola2.classList.remove('active')
    bola3.classList.remove('active')
    bola4.classList.remove('active')
    bola5.classList.remove('active')
}

icone1.addEventListener('touchstart', toggleicone1);
icone1.addEventListener('click', toggleicone1);

function toggleicone2(event){
    if (event.type === 'touchstart') event.preventDefault()
    const icone2 = document.getElementById('ball-bg2')
    icone2.classList.add('active');
    console.log("classe active adicionada icone2")

    bola1.classList.remove('active')
    bola3.classList.remove('active')
    bola4.classList.remove('active')
    bola5.classList.remove('active')
}

/*const mobile_icon2 = document.getElementById('bola1')
mobile_icon2.addEventListener('touchstart', toggleicone2);*/

/*
const touchicon2 = document.querySelector('img#icone2')
touchicon2.addEventListener('touchstart', toggleicone2); 

    nesse script, a imagem aciona o carrossel, mas não o efeito de bola de fundo.

    */
bola2.addEventListener('touchstart', toggleicone2);
icone2.addEventListener('touchstart', toggleicone2);
icone2.addEventListener('click', toggleicone2);


function toggleicone3(event){
    if (event.type === 'touchstart') event.preventDefault()
    const icone3 = document.getElementById('ball-bg3')
    icone3.classList.add('active');
    console.log("classe active adicionada icone3")

    bola1.classList.remove('active')
    bola2.classList.remove('active')
    bola4.classList.remove('active')
    bola5.classList.remove('active')
}

icone3.addEventListener('touchstart', toggleicone3);
icone3.addEventListener('click', toggleicone3);

function toggleicone4(event){
    if (event.type === 'touchstart') event.preventDefault()
    const icone4 = document.getElementById('ball-bg4')
    icone4.classList.add('active');
    console.log("classe active adicionada icone4")

    bola1.classList.remove('active')
    bola2.classList.remove('active')
    bola3.classList.remove('active')
    bola5.classList.remove('active')
    
}

icone4.addEventListener('touchstart', toggleicone4);
icone4.addEventListener('click', toggleicone4);

function toggleicone5(event){
    if (event.type === 'touchstart') event.preventDefault()
    const icone5 = document.getElementById('ball-bg5')
    icone5.classList.add('active');
    console.log("classe active adicionada icone5")

    bola1.classList.remove('active')
    bola2.classList.remove('active')
    bola3.classList.remove('active')
    bola4.classList.remove('active')
}

icone5.addEventListener('touchstart', toggleicone5);
icone5.addEventListener('click', toggleicone5);


/*


//APARECER RESUMO DIAGNÓSTICOS

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
