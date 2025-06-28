function checkAnswer() {
    var answer = document.querySelector('input').value.trim().toLowerCase();
    
    if (answer === 'burros') {
      
      window.location.href = 'pagina2/asdaheeyskwe.html'; 
      
      document.getElementById('result').textContent = 'Resposta incorreta!';
    }
  }
  