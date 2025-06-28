function checkAnswer() {
    var answer = document.querySelector('input').value.trim().toLowerCase();
    
    if (answer === 'insistentes') {
      // Redirecionar para outra página após acertar a resposta
      window.location.href = '../pagina3/eyishgesniwe.html'; // Substitua "outra-pagina-resposta.html" pela URL da página de resposta correta
    } else {
      // Exibir mensagem de resposta na div com o id "result"
      document.getElementById('result').textContent = 'Resposta incorreta!';
    }
  }
  