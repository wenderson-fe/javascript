function contar(){
    var ini = document.querySelector("#inicio")
    var fim = document.querySelector("#fim")
    var passo = document.querySelector("#passo")
    var res = document.querySelector("#res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // window.alert("[ERRO] Faltando dados!")
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i < f){
            // contgem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} 👉`
            }
          
        } else {
            // contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} 👉`
            }
        }
        res.innerHTML += '🏁'
    }
}
