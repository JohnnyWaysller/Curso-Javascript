let num = [], ins, item;

function solucao() {

    let input = document.getElementById('num') // vinculando
    ins = window.document.getElementById('ins')
    item = document.createElement('option')
    let novonumero = Number(input.value)

    if (num.length < 10 && novonumero <=10){
        if (num.indexOf(novonumero) == -1) {
            num.push(novonumero)
            item.text = num[num.length - 1]
            ins.appendChild(item)
        } else {
            alert('Numero já existe')
        }
    }else if(novonumero>10){
        alert('numero digitado maior que o permitido')
    }
    else{
        alert('Limite de numeros atingidos')
    }
}

function finalizar(){

let qtd = document.getElementById('qtd')
let maiorv = document.getElementById ('maiorv')
let menorv = document.getElementById ('menorv')
let soma = document.getElementById('soma')
let media = document.getElementById('media')
let somando = 0 
for (i in num){
    somando += num[i];
}

qtd.innerText = `Ao todo, temos ${num.length} cadastrados`
maiorv.innerText= `o numero maior é ${num[num.length -1]}`
menorv.innerText= `o numero menor é ${num[0]}`
soma.innerText= `a soma de todos numeros é ${somando}`
media.innerText= `a media dos numeros é ${somando/num.length}`

}

