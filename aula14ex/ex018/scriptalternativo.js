let num =document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res= document.querySelector('div#res')

let valores = []

function isNumero(n){

    if (Number(n)>=1 && Number(n)<=100){
        return true
    }else{
        return false
    }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){

    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement('option')
       item.text = `valor ${num.value} adicionado`
       lista.appendChild(item)
       res.innerHTML = ''
    }else {
        alert('valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length==0){
        alert('Adicione valores antes de finalizar')
    }else{
        let totelem = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for(let i in valores){
            soma+=valores[i]
            if(valores[i]>maior)
                maior = valores[i]
            if(valores[i]<menor)
                menor = valores[i]
        }
        media = soma / totelem
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${totelem} e numeros cadastrados.</p>`
        res.innerHTML += `<p>o maior numero é ${maior}</p>`
        res.innerHTML += `<p>o menor numero é ${menor}</p>`
        res.innerHTML += `<p>a soma dos numeros é ${(soma)}</p>`
        res.innerHTML += `<p>a media dos numeros é ${(media)}</p>`

    }
}