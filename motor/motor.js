function updateDate() {
     // Seleciona o elemento HTML com a classe 'data'
     const result = document.querySelector('.data');
     
     // Obtém a data atual
     const dataAtual = new Date();
   
     // Converte a data em uma string formatada sem o fuso horário
     const dataFormatada = dataAtual.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", hour12:"dataAtual" ,});
     

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
  data_cor.style.textShadow = `0px 60px 10px ${corL.value}`;
})










