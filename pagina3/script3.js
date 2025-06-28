function checkAnswer() {
    var answer = document.querySelector('input').value.trim().toLowerCase();
    
    if (answer === 'mais') {
      
      window.location.href = '../final/xassdakakskaksda.html'; 
    } else {
     
      document.getElementById('result').textContent = 'Resposta incorreta!';
    }
  }
  