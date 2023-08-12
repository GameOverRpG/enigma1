function checkAnswer() {
    var answer = document.querySelector('input').value.trim().toLowerCase();
    
    if (answer === 'burros') {
      // Redirecionar para outra página
      window.location.href = 'outra-pagina.html'; // Substitua "outra-pagina.html" pela URL da página desejada
    } else {
      // Exibir mensagem de resposta na div com o id "result"
      document.getElementById('result').textContent = 'Resposta incorreta!';
    }
  }
  