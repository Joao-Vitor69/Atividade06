let cont = 0

for (let i = 1; i <= 20; i++) {
    let num = prompt("Digite seu número: ")
    num = parseFloat(num)

    if(num%2==0){
        cont++;
    }
}
alert("Seus número pares são: "+cont)