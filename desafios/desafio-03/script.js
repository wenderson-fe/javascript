function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //Aqui eu utilizei a conversão, mas não é necessário
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criança-mas.jpg')
            } else if (idade < 29) {
                //Jovem
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem-30+.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/homem-velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/criança-fem.jpg')
            } else if (idade < 29) {
                //Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher-30+.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/mulher-velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //A imagem vai ser mostrada abaixo no meu elemento de cima
    }


}