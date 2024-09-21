let defini_tempo = document.getElementById('definir_temporizador');
let inciar_tempo = document.getElementById('iniciar_temporizador');
let pausar_temporizador = document.getElementById('pausar_temporizador');


defini_tempo.addEventListener('click', () => {
     const horas = document.querySelector('.ajusta_horas');
     const minutos = document.querySelector('.ajusta_minutos');
     const segundos = document.querySelector('.ajusta_segundos');
     const aplica_horas = document.querySelector('#aplica');

     aplica_horas.addEventListener('click', () => {
          s = parseInt(segundos.value);
          m = parseInt(minutos.value);
          h = parseInt(horas.value);
          relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
     })
     //TODO: Bota o temporizador pra funcionar

})

let alarme = window.document.getElementById('alarme');
let audio = window.document.querySelector('.audio');
alarme.addEventListener('click', () => {
     audio.pause();
})

temporizador_on = () => {

     if (s > 0) {
          s -= 1;
          relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
          if (m > 0 && s == 0) {
               m -= 1;
               s = 59;
               if (h > 0 && m == 0) {
                    h -= 1;
                    m = 59;


               }

          }
     }
     if (s == 0 && m == 0 && h == 0) {
          alarme.style.display = '';
          audio.play();
     }


}

let intervalId;
let num = 0

inciar_tempo.addEventListener('click', () => {
     if (num === 0) {
          intervalId = setInterval(temporizador_on, 1000);
          num++;
     }
});

alarme.addEventListener('click', () => {
     audio.pause();
     clearInterval(intervalId);
     alarme.style.display = 'none';
     num = 0;
});

pausar_temporizador.addEventListener('click', () => {
     clearInterval(intervalId);
     num = 0;
})


