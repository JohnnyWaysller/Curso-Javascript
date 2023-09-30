
var btn = document.getElementById('btn')
btn.addEventListener('click', contar)
//var valid = document.geteElementById('btn')
//valid.addEventListener('click',validar)

function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

   if (inicio == "" || fim == "" || passo === ""){
    //entradas dos inputs
    res.innerHTML = 'Preencha todos os campos'
}
else if(passo==0){
    passo =1
    var resultados = '';
    
    for (var i = inicio; i <= fim; i += passo) {
        resultados += ` ${i} `;  
    }
    
    res.innerHTML = resultados;
    window.alert('Passo zero, é considerado 1')
    }
    else {
        var resultados = '';
        
        for (var i = inicio; i <= fim; i += passo) {
            resultados += ` ${i} `;  
        }
        
        res.innerHTML = resultados;
        
        }
}