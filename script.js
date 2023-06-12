function sim() {
    alert("Você aceitou namorar comigo!:)")
}

function desvia(t) {
    var btn = t
    btn.style.position = 'absolute'
    btn.style.button = geraPosicao(10, 90)
    btn.style.left = geraPosicao(0, 100)
    console.log("opa, desviei...")
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}