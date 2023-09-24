var agora = new Date()
var hora = agora.getHours()
//var hora = 10
console.log (`Agora são exatamente ${hora} horas.`)
if(hora <12 && hora>3) {
    console.log('bom dia')}
else{
    if(hora<4){
            console.log ('boa madrugada')
        } else if(hora <=18){
    console.log('Boa tarde')
    }else{
        console.log('boa noite')
    }
}
console.log(`sao ${hora} horas `) 