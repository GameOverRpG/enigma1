function checkAnswer() {
    var answer = document.querySelector('input').value.trim().toLowerCase();
    
    if (answer === 'burros') {
      
      window.location.href = 'pagina2/outra-pagina.html'; 
      
      document.getElementById('result').textContent = 'Resposta incorreta!';
    }
  }
  