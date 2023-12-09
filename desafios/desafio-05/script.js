function tabuada(){
    var res = document.getElementById("selTab")
    var num1 = document.getElementById("txtN")
    var num = Number(num1.value)

    res.innerHTML = ''

    if (num1.value.length == 0) {
        window.alert("Por favor insira um número!")
    } else {
        for(var i = 0; i <= 10; i++){
            var resultado = num * i
            var item = document.createElement('option')
            item.text = `${num} x ${i} = ${resultado} `
            res.appendChild(item)
        }
    }
}