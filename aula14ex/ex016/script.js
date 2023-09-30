
var btn = document.getElementById('btn')
btn.addEventListener('click', contar)
//var valid = document.geteElementById('btn')
//valid.addEventListener('click',validar)

function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    if (inicio == "" || fim == "" || passo === "") {
        //entradas dos inputs
        res.innerHTML = 'Preencha todos os campos'
    }
    if (passo <= 0) {
        passo = 1
        window.alert('Passo zero, é considerado 1')
    }
        var resultados = '';
        if (inicio < fim) { //contagem crescente
            for (var i = inicio; i <= fim; i += passo) {
                resultados += `\u{1F449} ${i} `
            }
        }
        else {   //contagem regressiva
            for (var i = inicio; i >= fim; i -= passo) {
                resultados += `\u{1F449} ${i} `
            }
        }
        res.innerHTML = `${resultados}\u{1F3C1}`;

    
}
