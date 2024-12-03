let soma = 0

while(true){
    let num = prompt("Digite seus números: ")
    num = parseFloat(num)

    if(num>0){
        somatorio = soma+=num
    } else{
        break
    }
}
alert("A soma da sua sequência é: "+somatorio)