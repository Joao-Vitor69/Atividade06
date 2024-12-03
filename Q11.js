let cont = 0

for (let i = 1; i <= 20; i++) {
    let num = prompt("Digite seu número: ")
    num = parseFloat(num)

    if(num>8){
        cont++;
    }
    
}
alert("A quantidade de números maiores que 8 é: "+cont)