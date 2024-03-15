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


   