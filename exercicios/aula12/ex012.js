var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 12 && hora > 4){
    console.log('Bom dia!')
} else if (hora <= 18 && hora > 13){
    console.log('Boa tarde!')
} else if (hora > 1 && hora < 4){
    console.log('Boa madrugada!')
} else {
    console.log('Boa noite!')
}