function carregar () {
    var msg = document.getElementById("msg")
    var img = window.document.querySelector("img#imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src = "imagens/manha.jpg"
        document.body.style.backgroundColor = '#FFAC76'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = "imagens/tarde.jpg"
        document.body.style.backgroundColor = '#CE919F'
    } else {
        //Boa noite
        img.src = "imagens/noite.jpg"
        document.body.style.backgroundColor = '#1a415d'
    }
}