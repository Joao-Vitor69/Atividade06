let cont = 0
let cont2 =0
let cont3 = 0

for (let i = 1; i <=20; i++) {
    let num = prompt("Digite seus números: ")
    num = parseFloat(num)

    
     if(num>=0 && num<=100){
            cont++
    }else if(num>=101 && num<=200){
        cont2++
    }else if(num > 200){
        cont3++
    }
    
}
alert("Números dentro do intervalo de 0 a 100 é: "+cont)
alert("Números dentro do intervalo 101 a 200 é: "+cont2)
alert("Números maiores que 200 são: "+cont3)
