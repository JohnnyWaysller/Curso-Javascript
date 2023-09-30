
var btn = document.getElementById('btn')
btn.addEventListener('click', contar)

function contar() {
    //entradas dos inputs
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    var res = document.getElementById('res')
    var resultados = '';

    for (var i = inicio; i <= fim; i += passo) {
        resultados += `${i}`;  
    }

    res.innerHTML = resultados;
}