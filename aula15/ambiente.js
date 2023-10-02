let num = [5,8,2,9,3]
num[5]=7
num.sort() // ordena vetor
num.push(1) // adicionar valor na ultima posicao

//console.log(`nosso vetor tem ${num.length} posicoes ${num}`)

//for ( let i=0;i<num.length;i++){ forma convencional
 //   console.log(`${num[i]}`)
//}

//para arrays e objetos // forma simplificada
for (let i in num){ //para cada posicao (i) dentro de (num)
    console.log(`${num[i]}`)
}

