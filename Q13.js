let cont = 0

for (let i = 1; i <= 20; i++) {
    let num = prompt("Digite seus números: ")
    num = parseFloat(num)

    if(num>=0 && num<=100){
        cont++
    }
}
alert("Seus números que estão dentro do intervalo é: "+cont)