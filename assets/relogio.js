const inicioGlobal = new Date("2025-06-29T23:00:00").getTime();
const fimGlobal = inicioGlobal + 48 * 60 * 60 * 1000;

function atualizarContador() {
    const agora = Date.now();
    const restante = fimGlobal - agora;
    const contador = document.getElementById("contador");

    if (!contador) return;

    if (restante <= 0) {
        contador.textContent = "Tempo esgotado!"
        setTimeout(() => {
            window.location.href = "../final/esoiaheausiuo.html";
        }, 4000);
        return;
    }

    const h = Math.floor(restante / (1000 * 60 * 60));
    const m = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((restante % (1000 * 60)) / 1000);

    contador.textContent = ` ${h}h ${m}m ${s}s restantes`;
}

setInterval(atualizarContador, 1000);
