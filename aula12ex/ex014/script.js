
function carregar(){
    var msg = window.document.getElementById ('msg')
    var img = window.document.getElementById ('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12){
        // bom dia
        img.src = 'fotodia.png'
        document.body.style.background = '#ffd6aa'
    }else if(hora >= 12 && hora<=18){
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#425559'
    }else{
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#0a211e'
    }
}
