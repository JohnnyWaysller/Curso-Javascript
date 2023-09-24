function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src','bebehomem.png')
            }else if(idade <18){
                //jovem
                img.setAttribute('src','adolescentehomem.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','homemadulto.png')
            }else{
                //Velho
                img.setAttribute('src','homemvelho.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade>=0 && idade <10){
                //criança
                img.setAttribute('src','bebemulher.png')
            }else if(idade <18){
                //jovem
                img.setAttribute('src','adolescentemulher.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','mulheradulta.png')
            }else{
                //Velho
                img.setAttribute('src','mulhervelha.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.style.marginTop = '-40px'
        res.appendChild(img)
    }
}