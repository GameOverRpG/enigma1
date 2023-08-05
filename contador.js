// Configure o Firebase com as informações do seu projeto
const firebaseConfig = {
    apiKey: "AIzaSyCObtSjEPnR-pupgu5eS3ppA_uixtJyuNQ",
    authDomain: "rpgdovision.firebaseapp.com",
    databaseURL: "https://rpgdovision-default-rtdb.firebaseio.com",
    projectId: "rpgdovision",
    storageBucket: "rpgdovision.appspot.com",
    messagingSenderId: "635244374399",
    appId: "1:635244374399:web:ebf8f73710d7f4f702d24a"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let contadorHoras = 0;
let contadorMinutos = 0;
let contadorSegundos = 0;

// Recupera o valor atual do contador do Firebase Realtime Database
database.ref('contador').on('value', (snapshot) => {
    const data = snapshot.val();
    contadorHoras = data.horas || 0;
    contadorMinutos = data.minutos || 0;
    contadorSegundos = data.segundos || 0;
});

function atualizarContador() {
    contadorSegundos++;
    
    if (contadorSegundos === 60) {
        contadorSegundos = 0;
        contadorMinutos++;
    }
    
    if (contadorMinutos === 60) {
        contadorMinutos = 0;
        contadorHoras++;
    }

    const horasFormatadas = String(contadorHoras).padStart(2, '0');
    const minutosFormatados = String(contadorMinutos).padStart(2, '0');
    const segundosFormatados = String(contadorSegundos).padStart(2, '0');

    document.getElementById('contador').innerText = `${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;

    // Atualiza o valor do contador no Firebase Realtime Database
    database.ref('contador').set({
        horas: contadorHoras,
        minutos: contadorMinutos,
        segundos: contadorSegundos
    });
}

setInterval(atualizarContador, 1000);
