
let sentido;
let stop;
let interval;
relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

// função para iniciar e para o relogio
Relogio = () => {

     if (s < 59) {
          s = s + 1;
          relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
          if (m < 59 && s == 59) {
               m++;
               s = 0;
               if (h < 24 && m == 59) {
                    h++;
                    m = 0;

               }
          }
     }
     return h, m, s;
}

function loop(i, i2) {
     if (i === true && i2 === 1) {
          interval = setInterval(() => {
               Relogio();
               return false

          }, 1000);
     }
     else {
          return false, i2 = -1;
     }

}

// BOTOES 
i = 0;

let iniciar = document.getElementById('iniciar');
iniciar.addEventListener('click', () => {
     relogio.style.color = corL.value;
     stop = true;
     if (stop === true) {
          i++;
          stop, i = loop(stop, i);
     }

});

let resetar = document.getElementById('zerar');
resetar.addEventListener('click', () => {
     clearInterval(interval);
     stop = false;
     relogio.style.color = corL.value;
     s = 0;
     m = 0;
     h = 0;
     i = 0;
     relogio.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
});

let pausar = document.getElementById('pausar');
pausar.addEventListener('click', () => {
     stop = true;
     clearInterval(interval);
     relogio.style.color = 'red';
     loop(false);
     i = 0;

});




