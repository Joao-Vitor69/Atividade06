let cont = 0

for (let i = 1; i <= 10; i++) {
    let idades = prompt("Digite suas idades: ")
    idades = parseFloat(idades)  

    if(idades>=18){
        cont++;
    }
}
alert("O número de maiores de idade é: "+cont)
