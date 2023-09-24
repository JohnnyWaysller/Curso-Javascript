var agora = new Date()
var diaSem = agora.getDay()
var dia
switch (diaSem) {
    case 0:
        var dia = ('Domingo')
        break
    case 1:
        dia =('Segunda')
        break
    case 2:
        dia =('Terça')
        break
    case 3:
        dia =('Quarta')
        break
    case 4:
        dia =('Quinta')
        break
    case 5:
        dia =('sabado')
        break
    default:
        dia =('erro dia invalido')
}
console.log(`Hoje é ${dia}`)