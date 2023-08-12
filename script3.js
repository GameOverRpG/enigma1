function checkAnswer() {
    var answer = document.querySelector('input').value.trim().toLowerCase();
    
    if (answer === 'mais') {
      // Redirecionar para outra página após acertar a resposta
      window.location.href = 'final.html'; // Substitua "outra-pagina-resposta.html" pela URL da página de resposta correta
    } else {
      // Exibir mensagem de resposta na div com o id "result"
      document.getElementById('result').textContent = 'Resposta incorreta!';
    }
  }
  