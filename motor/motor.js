const result = document.querySelector('.data');
function updateDate() {
  // Seleciona o elemento HTML com a classe 'data'

  // Obtém a data atual
  const dataAtual = new Date();

  // Converte a data em uma string formatada sem o fuso horário
  const dataFormatada = dataAtual.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", hour12: "dataAtual", });


  const data2 = dataFormatada.toString();
  /* essa opção 👇⌚ para formata o data
   dataAtual.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
   */
  // Define o conteúdo do elemento HTML 'result' como a data formatada
  result.textContent = data2;

  // Agende a próxima atualização eficientemente usando 'requestAnimationFrame'
  requestAnimationFrame(updateDate);
}

// Chamada inicial da função 'updateDate'
requestAnimationFrame(updateDate);


const objeto = document.querySelector('.corpo');

objeto.addEventListener('click', () => {
  objeto.classList.add('animando');

  setTimeout(() => {
    objeto.classList.remove('animando');
  }, 2000);
});

let h = 0;
let m = 0;
let s = 0;


const button = document.querySelector('.button');
const bord = document.querySelector('.body');
const cor = document.querySelector('.cor');
const corL = document.querySelector('.corL');
let data_cor = document.getElementById('data_cor');


console.log(cor.value);
button.addEventListener('click', () => {
  console.log(cor.value);
  bord.style.backgroundColor = cor.value;
  data_cor.style.color = corL.value;
  relogio.style.color = corL.value;
  data_cor.style.textShadow = `0px 60px 10px ${corL.value}`;
})





const modo_cronometro = document.querySelector('.buttons_cronometro');

const modo_temporizador = document.querySelector('.buttons_temporizador');

function modelo_relogio() {

  const button2 = document.querySelector('.button2');

  button2.addEventListener('click', () => {
    modo_temporizador.style.display = 'none';
    modo_cronometro.style.display = 'none';
    result.style.display = '';
    relogio.style.display = 'none';
  })

}

modelo_relogio();



const relogio = document.querySelector('#relogio');

function modelo_cronometro() {
  const button3 = document.querySelector('.button3');

  button3.addEventListener('click', () => {
    modo_temporizador.style.display = 'none';
    modo_cronometro.style.display = '';
    result.style.display = 'none';
    relogio.style.display = '';
    h = 0;
    m = 0;
    s = 0;
    relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  })

}

modelo_cronometro();



function modelo_temporizador() {
  const button4 = document.querySelector('.button4');
  button4.addEventListener('click', async () => {
    modo_temporizador.style.display = '';
    modo_cronometro.style.display = 'none';
    result.style.display = 'none';
    relogio.style.display = '';
    h = 1;
    m = 1;
    s = 1;
    relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;


  })


}

modelo_temporizador();